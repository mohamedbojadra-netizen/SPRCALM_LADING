import { CURRENCY, PACKS } from '@/lib/product'

export function StickyCta() {
  const popular = PACKS[1]

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground line-through">
            {popular.oldPrice} {CURRENCY}
          </span>
          <span className="text-lg font-bold text-accent">
            {popular.price} {CURRENCY}
          </span>
        </div>
        <a
          href="#commander"
          className="flex-1 rounded-xl bg-accent px-6 py-3 text-center font-bold text-accent-foreground shadow-lg"
        >
          Commander
        </a>
      </div>
    </div>
  )
}
