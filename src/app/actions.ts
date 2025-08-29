"use server";

import {
  getImmediateFeedbackWithReasoning,
  type ImmediateFeedbackInput,
  type ImmediateFeedbackOutput,
} from "@/ai/flows/immediate-feedback-with-reasoning";

export async function getFeedback(
  input: ImmediateFeedbackInput
): Promise<ImmediateFeedbackOutput> {
  try {
    const isCorrect = input.submittedAnswer === input.correctAnswer;

    // The GenAI flow is designed to generate feedback for incorrect answers.
    // For correct ones, we can provide a standard positive response.
    if (isCorrect) {
      return {
        isCorrect: true,
        feedback: `Correct! ${input.explanation || "Great job."}`,
      };
    }

    // Call the AI to get detailed feedback for the incorrect answer.
    const result = await getImmediateFeedbackWithReasoning(input);
    return result;
  } catch (error) {
    console.error("Error getting feedback from AI:", error);
    // Return a structured error that the client can handle
    return {
      isCorrect: false,
      feedback: "Sorry, an error occurred while generating feedback. Please try again.",
    };
  }
}
