import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon } from 'phosphor-react'

export function Header() {
  const { theme, setTheme } = useTheme()

  function handleToggleTheme() {
    setTheme(!theme)
  }

  return (
    <header className="h-20 bg-zinc-400 dark:bg-zinc-900 text-zinc-100 flex items-center transition-colors " >
      <div className="w-full flex items-center justify-between px-4 md:px-16" >
        <span className="flex items-center" >
          { theme ? (
            <Moon fontSize={32} className="cursor-pointer text-zinc-200 transition-all duration-200 " onClick={handleToggleTheme} />
          ): (
            <Sun fontSize={32} className="cursor-pointer text-zinc-700 transition-all duration-200" onClick={handleToggleTheme} />
          ) }
        </span>

        <div className="md:flex md:gap-6" >
          <div className="md:w-24 md:h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg " ></div>
          <div className="md:w-24 md:h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg " ></div>
          <div className="md:w-24 md:h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg " ></div>
          <div className="md:w-24 md:h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg " ></div>
        </div>

        <div className="flex items-center gap-4" >
          <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg  transition-colors" ></div>
          <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg  transition-colors" ></div>
          <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full transition-colors" ></div>
        </div>
      </div>
    </header>
  )
}