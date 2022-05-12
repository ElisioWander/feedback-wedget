import bugImageUrl from "/assets/Bug.svg";
import ideaImageUrl from "/assets/Idea.svg";
import thoughtImageUrl from "/assets/Thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"; 
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { useScreenshotContext } from "../../contexts/ScreenshotContext";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "imagem do inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

//Object.entries(feedbackTypes) =>
/**
 * [
 *  ['BUG', {...}],
 * ['IDEA', {...}],
 * ['THOUGHT', {...}]
 * ]
 */

export type FeedbackType = keyof typeof feedbackTypes
//type FeedbackType = "BUG" | "IMAGE" | "OTHERS"

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const { setScreenshot } = useScreenshotContext()

  function handleFeedbackRestart() {
    setFeedbackSent(false)
    setFeedbackType(null)
    setScreenshot(null)
  }

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleFeedbackRestart} />
      ): (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ): (
            <FeedbackContentStep onFeedbackSent={() => setFeedbackSent(true)} onFeedbackRestartRequested={handleFeedbackRestart} feedbackType={feedbackType} />
          )}
        </>
      ) }

      <footer className="text-xs text-zinc-500 dark:text-neutral-400 font-medium ">
        Feito com ❤️ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
