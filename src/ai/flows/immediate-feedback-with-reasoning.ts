'use server';
/**
 * @fileOverview Provides immediate feedback on submitted answers, including correctness and reasoning.
 *
 * - getImmediateFeedbackWithReasoning - A function that provides feedback on a submitted answer.
 * - ImmediateFeedbackInput - The input type for the getImmediateFeedbackWithReasoning function.
 * - ImmediateFeedbackOutput - The return type for the getImmediateFeedbackWithReasoning function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImmediateFeedbackInputSchema = z.object({
  question: z.string().describe('The question statement.'),
  choices: z.array(z.string()).describe('The answer choices for the question.'),
  submittedAnswer: z.string().describe('The answer submitted by the user.'),
  correctAnswer: z.string().describe('The correct answer to the question.'),
  explanation: z.string().optional().describe('The detailed explanation behind the correct answer.'),
});
export type ImmediateFeedbackInput = z.infer<typeof ImmediateFeedbackInputSchema>;

const ImmediateFeedbackOutputSchema = z.object({
  isCorrect: z.boolean().describe('Whether the submitted answer is correct.'),
  feedback: z.string().describe('The feedback on the submitted answer, including explanation.'),
});
export type ImmediateFeedbackOutput = z.infer<typeof ImmediateFeedbackOutputSchema>;

export async function getImmediateFeedbackWithReasoning(input: ImmediateFeedbackInput): Promise<ImmediateFeedbackOutput> {
  return immediateFeedbackWithReasoningFlow(input);
}

const prompt = ai.definePrompt({
  name: 'immediateFeedbackPrompt',
  input: {schema: ImmediateFeedbackInputSchema},
  output: {schema: ImmediateFeedbackOutputSchema},
  prompt: `You are an expert tutor providing feedback to students on their answer submissions.

  Based on the question, the available choices, the submitted answer, the correct answer, and the explanation, determine if the submitted answer is correct or not. Provide detailed feedback including the reasoning behind the correct answer.

  Question: {{{question}}}
  Choices: {{#each choices}}{{{this}}}, {{/each}}
  Submitted Answer: {{{submittedAnswer}}}
  Correct Answer: {{{correctAnswer}}}
  Explanation: {{{explanation}}}

  Is the submitted answer correct? (yes/no):
  Feedback:`, 
});

const immediateFeedbackWithReasoningFlow = ai.defineFlow(
  {
    name: 'immediateFeedbackWithReasoningFlow',
    inputSchema: ImmediateFeedbackInputSchema,
    outputSchema: ImmediateFeedbackOutputSchema,
  },
  async input => {
    const {correctAnswer, submittedAnswer, explanation} = input;
    const isCorrect = submittedAnswer === correctAnswer;
    let feedback;

    if (isCorrect) {
      feedback = `Correct! ${explanation}`;
    } else {
      const {output} = await prompt(input);
      feedback = output!.feedback;
    }

    return {
      isCorrect: isCorrect,
      feedback: feedback,
    };
  }
);
