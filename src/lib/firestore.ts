import { collection, getDocs, writeBatch, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { chapters as initialChapters } from "./data";
import type { Chapter, Question } from "./types";

// Function to seed initial data, now also updates existing chapters
export async function seedInitialData() {
  // This function should ideally be run manually via a script, not on app startup.
  // For this project, we assume it's run once or when data needs updating.
  if (process.env.VERCEL) {
      console.log("Skipping seeding on Vercel.");
      return;
  }
  console.log("Checking and seeding data...");
  const batch = writeBatch(db);
  const chaptersRef = collection(db, "chapters");

  for (const chapter of initialChapters) {
    const chapterRef = doc(db, "chapters", String(chapter.id));
    const { questions, ...chapterData } = chapter;
    
    // Set chapter metadata (title, id)
    // This will create or overwrite the chapter document
    batch.set(chapterRef, chapterData);

    if (questions && questions.length > 0) {
      const questionsRef = collection(db, `chapters/${chapter.id}/questions`);
      for (const question of questions) {
        const questionRef = doc(questionsRef, question.id);
        // Set each question, creating or overwriting it
        batch.set(questionRef, question);
      }
    }
  }

  await batch.commit();
  console.log("Data seeding/update complete.");
}


// Function to get all chapters with their questions
export async function getChapters(): Promise<Chapter[]> {
  // Prevent this from running on the server during the build process on Vercel
  if (typeof window === 'undefined') {
    return [];
  }
  
  const chaptersRef = collection(db, "chapters");
  const chaptersSnapshot = await getDocs(chaptersRef);
  
  const chapters: Chapter[] = [];

  for (const chapterDoc of chaptersSnapshot.docs) {
    const chapterData = chapterDoc.data() as Omit<Chapter, 'questions'>;
    const questions: Question[] = [];

    const questionsRef = collection(db, `chapters/${chapterDoc.id}/questions`);
    const questionsSnapshot = await getDocs(questionsRef);
    
    questionsSnapshot.forEach((questionDoc) => {
      questions.push(questionDoc.data() as Question);
    });

    // Sort questions by their original ID numbering
    questions.sort((a, b) => {
      // Safely parse IDs that might not have a hyphen
      const aNum = parseInt(a.id.split('-')[1] || '0');
      const bNum = parseInt(b.id.split('-')[1] || '0');
      return aNum - bNum;
    });

    chapters.push({
      ...chapterData,
      questions,
    });
  }

  // Sort chapters by ID
  chapters.sort((a,b) => a.id - b.id);

  // If firestore is empty, maybe seed it or return local data
  if (chapters.length === 0) {
      console.log("Firestore is empty, consider seeding data.");
      return initialChapters;
  }

  return chapters;
}


// Function to add new questions to a chapter
export async function addQuestionsToChapter(chapterId: number, questions: Question[]) {
  const chapterRef = doc(db, "chapters", String(chapterId));
  
  // Check if chapter exists
  const chapterDoc = await getDoc(chapterRef);
  if (!chapterDoc.exists()) {
    // Optionally create chapter if it doesn't exist
    // For now, we'll create it.
    await setDoc(chapterRef, { id: chapterId, title: `Chapter ${chapterId}` });
  }

  const batch = writeBatch(db);
  const questionsRef = collection(db, `chapters/${chapterId}/questions`);

  questions.forEach((question) => {
    const questionRef = doc(questionsRef, question.id);
    batch.set(questionRef, question);
  });

  await batch.commit();
}
