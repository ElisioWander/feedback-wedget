import html2canvas from "html2canvas";
import { createContext, ReactNode, useContext, useState } from "react";

interface ScreenshotContextProps {
  children: ReactNode;
}

type ScreenshotContextData = {
  screenshot: string | null;
  setScreenshot: (screenshot:string | null) => void;
  isTakingScreeshot: boolean;
  handleTakeScreeshot: () => void;
}

const ScreenshotContext = createContext({} as ScreenshotContextData)

export function ScreenshotProvider({ children }: ScreenshotContextProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isTakingScreeshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreeshot() {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL('image/png')

    setScreenshot(base64image)
    setIsTakingScreenshot(false)
  }

  return (
    <ScreenshotContext.Provider value={{screenshot, isTakingScreeshot, setScreenshot, handleTakeScreeshot}} >
      {children}
    </ScreenshotContext.Provider>
  )
}

export const useScreenshotContext = () => useContext(ScreenshotContext)