import { Widget } from './Components/Widget'
import { ScreenshotProvider } from './contexts/ScreenshotContext'
import './global.css'

export function App() {
  return (
    <ScreenshotProvider>
      <Widget />
    </ScreenshotProvider>
  )
}
