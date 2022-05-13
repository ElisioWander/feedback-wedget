import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "../";
import { useScreenshotContext } from "../../../contexts/ScreenshotContext";
import { api } from "../../../lib/axios";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const { screenshot } = useScreenshotContext()

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    // const data = {
    //   screenshot,
    //   comment,
    // };

    // console.log(data);

    setIsSendingFeedback(true)

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })

    setIsSendingFeedback(false)
    onFeedbackSent()
  }

  //feedbackTypeInfo contém as informações que irão vir de dentro do feedbackType selecionado
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors "
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl text-zinc-800 dark:text-zinc-100 leading-6 flex items-center gap-2 ">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <div onSubmit={handleSubmitFeedback} className="flex py-8 gap-2 w-full ">
        <form className="my-4 w-full">
          <textarea
            className="sm:min-w-[220px] md:min-w-[320px] w-full min-h-[112px] text-sm placeholder:zinc-500 dark:placeholder-zinc-400 text-zinc-800 dark:text-zinc-100 border-zinc-300 dark:border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin "
            placeholder="Conte com detalhes o que está acontecendo"
            onChange={(event) => setComment(event.target.value)}
          />

          <footer className="flex gap-2 mt-2 ">
            <ScreenshotButton />

            <button
              type="submit"
              disabled={comment.length === 0 || isSendingFeedback}
              className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed "
            >
              {isSendingFeedback ? <Loading /> : 'Enviar Feedback'}
            </button>
          </footer>
        </form>
      </div>
    </>
  );
}
