"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Search } from "lucide-react"
import Link from "next/link"

export function NavSearch() {
  const [open, setOpen] = React.useState(false)

  const results = [
    {
      "name": "Calendar",
      "link": "/search?q=calendar"
    },
    {
      "name": "Search Emoji",
      "link": "/search?q=search+emoji"
    },
    {
      "name": "Calculator",
      "link": "/search?q=calculator"
    }
  ]

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit border-none">
        <Search/>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a text for search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Results">
              {results && results.length > 0 && results.map((r, i) => (
                <Link className="cursor-pointer" href={r.link} key={i}>
                  <CommandItem className="cursor-pointer">{r.name}</CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
