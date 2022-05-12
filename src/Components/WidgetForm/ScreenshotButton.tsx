import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";
import { useScreenshotContext } from "../../contexts/ScreenshotContext";

export function ScreenshotButton() {
  const { 
    isTakingScreeshot, 
    screenshot, 
    setScreenshot, 
    handleTakeScreeshot } = useScreenshotContext()

  if(screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors "
        onClick={() => setScreenshot(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors " />
      </button>
    )
  }

  return (
    <button 
      type="button"
      className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-offset-zinc-900 focus:ring-brand-500 "
      onClick={handleTakeScreeshot}
    >
      {isTakingScreeshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-800 dark:text-zinc-100 " />}
    </button>
  )
}