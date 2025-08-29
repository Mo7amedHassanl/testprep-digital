import type { Chapter } from './types';

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Genesis of Modern Testing",
    questions: [
      {
        id: "1-1",
        type: "MCQ",
        statement: "Who is considered the father of psychoanalysis?",
        choices: ["Carl Jung", "B.F. Skinner", "Sigmund Freud", "Alfred Adler", "Jean Piaget"],
        correctAnswer: "Sigmund Freud",
        explanation: "Sigmund Freud is widely regarded as the founder of psychoanalysis, a clinical method for treating psychopathology through dialogue between a patient and a psychoanalyst.",
        difficulty: "Easy",
        reference: "Psychology Today, 'A History of Psychoanalysis'",
        keyConcepts: ["Psychoanalysis", "History of Psychology"],
        msc: "Foundational Concepts"
      },
      {
        id: "1-2",
        type: "T/F",
        statement: "Behaviorism focuses on internal mental states.",
        choices: ["True", "False"],
        correctAnswer: "False",
        explanation: "Behaviorism, as advocated by figures like B.F. Skinner and John B. Watson, is a theory of learning based on the idea that all behaviors are acquired through conditioning, and it focuses on observable behaviors rather than internal states like thoughts and feelings.",
        difficulty: "Easy",
        reference: "Simply Psychology, 'Behaviorist Approach'",
        keyConcepts: ["Behaviorism", "Learning Theories"],
        msc: "Major Schools of Thought"
      },
      {
        id: "1-3",
        type: "MCQ",
        statement: "Which of these is NOT one of the 'Big Five' personality traits?",
        choices: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Creativity"],
        correctAnswer: "Creativity",
        explanation: "The Big Five personality traits are Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (sometimes referred to as Emotional Stability). Creativity is often seen as a facet of Openness, but is not one of the core five traits.",
        difficulty: "Medium",
        reference: "Journal of Personality and Social Psychology, Vol 5",
        keyConcepts: ["Personality Traits", "Five-Factor Model"],
        msc: "Personality Psychology"
      },
    ],
  },
  {
    id: 2,
    title: "Statistical Concepts in Assessment",
    questions: [
      {
        id: "2-1",
        type: "MCQ",
        statement: "What does a p-value of less than 0.05 typically indicate in statistical testing?",
        choices: ["The result is not statistically significant.", "The null hypothesis is true.", "The result is statistically significant.", "There is a 95% chance the result is correct.", "The test is invalid."],
        correctAnswer: "The result is statistically significant.",
        explanation: "In statistical hypothesis testing, the p-value is the probability of obtaining test results at least as extreme as the results actually observed, under the assumption that the null hypothesis is correct. A p-value less than 0.05 is a common threshold to reject the null hypothesis and conclude that the result is statistically significant.",
        difficulty: "Medium",
        reference: "Statistics for Dummies, Chapter 8",
        keyConcepts: ["p-value", "Statistical Significance", "Hypothesis Testing"],
        msc: "Research Methods"
      },
      {
        id: "2-2",
        type: "T/F",
        statement: "Correlation implies causation.",
        choices: ["True", "False"],
        correctAnswer: "False",
        explanation: "This is a fundamental principle in statistics. While two variables may be correlated, meaning they move in relation to each other, it does not mean that one variable causes the other to occur. There could be a third, confounding variable at play.",
        difficulty: "Easy",
        reference: "Introductory Statistics, Chapter 2",
        keyConcepts: ["Correlation", "Causation"],
        msc: "Statistical Principles"
      },
    ],
  },
  // Generate remaining chapters without questions for navigation purposes
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 3,
    title: `Chapter ${i + 3}: Advanced Topics`,
    questions: [],
  }))
];
