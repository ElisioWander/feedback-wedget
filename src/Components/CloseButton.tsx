import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

export function CloseButton() {
  return (
    <Popover.Button className="top-5 right-5 absolute text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors " title="Fechar formulário"  >
      <X className="font-bold w-4 h-4" />
    </Popover.Button>
  )
}