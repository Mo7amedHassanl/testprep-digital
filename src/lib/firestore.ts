import { collection, getDocs, writeBatch, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { chapters as initialChapters } from "./data";
import type { Chapter, Question } from "./types";

// Function to seed initial data if the database is empty
export async function seedInitialData() {
  const chaptersRef = collection(db, "chapters");
  const snapshot = await getDocs(chaptersRef);

  if (snapshot.empty) {
    console.log("Database is empty, seeding initial data...");
    const batch = writeBatch(db);

    for (const chapter of initialChapters) {
      const chapterRef = doc(db, "chapters", String(chapter.id));
      const { questions, ...chapterData } = chapter;
      batch.set(chapterRef, chapterData);

      if (questions && questions.length > 0) {
        const questionsRef = collection(db, `chapters/${chapter.id}/questions`);
        for (const question of questions) {
          const questionRef = doc(questionsRef, question.id);
          batch.set(questionRef, question);
        }
      }
    }

    await batch.commit();
    console.log("Initial data seeded successfully.");
  } else {
    // console.log("Database already contains data, skipping seed.");
  }
}


// Function to get all chapters with their questions
export async function getChapters(): Promise<Chapter[]> {
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
      const aNum = parseInt(a.id.split('-')[1]);
      const bNum = parseInt(b.id.split('-')[1]);
      return aNum - bNum;
    });

    chapters.push({
      ...chapterData,
      questions,
    });
  }

  // Sort chapters by ID
  chapters.sort((a,b) => a.id - b.id);

  return chapters;
}


// Function to add new questions to a chapter
export async function addQuestionsToChapter(chapterId: number, questions: Question[]) {
  const chapterRef = doc(db, "chapters", String(chapterId));
  
  // Check if chapter exists
  const chapterDoc = await getDoc(chapterRef);
  if (!chapterDoc.exists()) {
    // Optionally create chapter if it doesn't exist
    // For now, we'll throw an error.
    throw new Error(`Chapter with ID ${chapterId} does not exist.`);
  }

  const batch = writeBatch(db);
  const questionsRef = collection(db, `chapters/${chapterId}/questions`);

  questions.forEach((question) => {
    const questionRef = doc(questionsRef, question.id);
    batch.set(questionRef, question);
  });

  await batch.commit();
}
