import { CloseButton } from "../../CloseButton";
import emojiUrl from '../../../../public/assets/Emoji.svg'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px] " >
        <img src={emojiUrl} alt="Emoji de sucesso" />

        <span className="text-xl mt-2 text-zinc-800 dark:text-zinc-100 " >Agradecemos o feedback</span>

        <button
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 text-zinc-800 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-offset-zinc-900 focus:ring-brand-500 "
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}