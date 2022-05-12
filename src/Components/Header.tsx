import { useTheme } from '../contexts/ThemeContext'
import Switch from 'react-switch'

export function Header() {
  const { theme, setTheme } = useTheme()

  function handleToggleTheme() {
    setTheme(!theme)
  }

  return (
    <header className="h-20 bg-zinc-400 dark:bg-zinc-800 text-zinc-100 flex items-center transition-colors " >
      <div className="w-full flex items-center justify-between px-4 " >
        <span className="flex items-center" >
          <Switch onChange={handleToggleTheme} checked={theme == ''} onColor={"#3F3F46"} height={20} onHandleColor="#996DFF" />
        </span>

        <div className="flex items-center gap-4" >
          <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-700 rounded-lg  transition-colors" ></div>
          <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-700 rounded-lg  transition-colors" ></div>
          <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full transition-colors" ></div>
        </div>
      </div>
    </header>
  )
}