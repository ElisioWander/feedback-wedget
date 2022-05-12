import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { Main } from './Components/Main'
import { Widget } from './Components/Widget'
import { ScreenshotProvider } from './contexts/ScreenshotContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import './global.css'

export function App() {
  return (
    <ThemeContextProvider>
      <ScreenshotProvider>
        <Header />
        <Main />
        <Widget />
        <Footer />
      </ScreenshotProvider>
    </ThemeContextProvider>
  )
}
