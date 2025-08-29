'use server';
/**
 * @fileOverview Extracts and structures question data from unstructured text into a specific JSON format.
 *
 * - extractQuestions - A function that processes raw text to identify and format questions.
 * - ExtractQuestionsInput - The input type (raw text) for the function.
 * - QuestionJsonOutput - The structured JSON output type.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractQuestionsInputSchema = z.object({
  text: z.string().describe('The raw, unstructured text containing questions, choices, answers, and other metadata.'),
});
export type ExtractQuestionsInput = z.infer<typeof ExtractQuestionsInputSchema>;

const QuestionJsonOutputSchema = z.object({
  questions: z.array(z.object({
    id: z.number().describe("A unique numerical ID for the question within the chapter."),
    type: z.enum(["multiple_choice", "true_false"]).describe("The type of the question."),
    question: z.string().describe("The main statement of the question."),
    table: z.string().optional().describe("A LaTeX formatted string for a table, if present. Otherwise null."),
    options: z.array(z.string()).optional().describe("An array of choice strings for multiple_choice questions."),
    correct_answer: z.string().describe("The correct answer. For multiple_choice, this is the letter (A, B, C, etc.). For true_false, it's 'True' or 'False'."),
    explanation: z.string().nullable().describe("The explanation for the correct answer."),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']).describe("The difficulty level of the question."),
    reference: z.string().describe("The reference code or source for the question."),
    category: z.string().describe("A pipe-separated string of key concepts or categories."),
    type_label: z.string().describe("The MSC (Main Subject Category) label for the question, e.g., Conceptual, Quantitative.")
  })),
});
export type QuestionJsonOutput = z.infer<typeof QuestionJsonOutputSchema>;


export async function extractQuestions(input: ExtractQuestionsInput): Promise<QuestionJsonOutput> {
  return extractQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractQuestionsPrompt',
  input: {schema: ExtractQuestionsInputSchema},
  output: {schema: QuestionJsonOutputSchema},
  prompt: `You are an expert data entry specialist. Your task is to analyze the provided text and extract all the questions into a structured JSON format.

  Carefully parse the following text:
  ---
  {{{text}}}
  ---

  Follow these rules for extraction:
  1.  For 'multiple_choice' questions, the 'correct_answer' field must be the capital letter corresponding to the correct option (A, B, C, D, E).
  2.  For 'true_false' questions, the 'options' field should be omitted, and the 'correct_answer' should be either 'True' or 'False'.
  3.  The 'id' for each question should be its question number.
  4.  If a question includes a clearly defined table, extract the LaTeX content into the 'table' field. If not, the table field should be null.
  5.  Ensure all LaTeX expressions within the question, options, and explanation are preserved exactly as they appear.
  6.  The 'category' should be a pipe-separated string of the concepts.
  7.  The 'type_label' should be the value associated with MSC (e.g., Conceptual).
  
  Generate a JSON object that strictly follows the output schema.`,
});

const extractQuestionsFlow = ai.defineFlow(
  {
    name: 'extractQuestionsFlow',
    inputSchema: ExtractQuestionsInputSchema,
    outputSchema: QuestionJsonOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error("The AI model failed to return a valid JSON output.");
    }
    return output;
  }
);
