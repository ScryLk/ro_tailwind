import { Search } from 'lucide-react'

export function Input() {
  return (
    <div className="flex w-full items-center gap-2 rounded-lg border mx-1 border-zinc-300 px-3 py-2 shadow-sm">
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        placeholder="Search"
        className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600  "
      />
    </div>
  )
}
