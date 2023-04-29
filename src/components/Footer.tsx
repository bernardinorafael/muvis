import { cn } from '@/utils/cn'
import { InstagramLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'

import { DESIGNATIONS } from '@/config/footer-designations'

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 border-t border-zinc-800 bg-zinc-950 p-10 pb-12">
      <div className="flex w-full items-center justify-center gap-4 border-b border-zinc-700 pb-4">
        {DESIGNATIONS.map((designation, i) => {
          return (
            <span
              className={cn(
                'cursor-pointer select-none rounded border border-transparent p-2 text-lg font-bold',
                'transition-colors hover:border-zinc-700',
              )}
              key={`${designation}-${i}`}
            >
              {designation}
            </span>
          )
        })}
      </div>

      <p className="max-w-[50%] text-center text-lg leading-relaxed text-zinc-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        exercitationem modi dolorum culpa harum quas quaerat atque! Error, officia
        temporibus! exercitationem modi dolorum culpa harum quas quaerat atque!
        Error, officia temporibus!
      </p>

      <section className="flex items-center gap-4">
        <button className="group rounded-full bg-zinc-700 p-3">
          <InstagramLogo
            weight="fill"
            size={20}
            className="fill fill-zinc-400 transition-transform group-hover:scale-125"
          />
        </button>

        <button className="group rounded-full bg-zinc-700 p-3">
          <LinkedinLogo
            weight="fill"
            size={20}
            className="fill fill-zinc-400 transition-transform group-hover:scale-125"
          />
        </button>

        <button className="group rounded-full bg-zinc-700 p-3">
          <TwitterLogo
            weight="fill"
            size={20}
            className="fill fill-zinc-400 transition-transform group-hover:scale-125"
          />
        </button>
      </section>
    </footer>
  )
}
