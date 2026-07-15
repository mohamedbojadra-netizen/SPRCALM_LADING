import Image from 'next/image'
import { Star, Truck, ShieldCheck, Leaf } from 'lucide-react'
import { CURRENCY, PACKS } from '@/lib/product'

export function Hero() {
  const popular = PACKS[1]

  return (
    <section className="bg-background">
      {/* Announcement bar */}
      <div className="bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground">
        Offre limitée : 2 achetés = 1 GRATUIT — Paiement à la livraison
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-8 md:flex-row md:py-14">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/product-3.png"
            alt="SupraCalm — Boisson adaptogène naturelle saveur framboise-citron"
            width={680}
            height={680}
            priority
            className="mx-auto w-full max-w-md rounded-2xl"
          />
        </div>

        {/* Copy */}
        <div className="flex w-full flex-col items-start gap-5 md:w-1/2">
          <div className="flex items-center gap-2">
            <span className="flex" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">+2 400 clients satisfaits</span>
          </div>

          <h1 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Retrouvez votre calme, votre concentration et votre sommeil — naturellement
          </h1>

          <p className="text-pretty leading-relaxed text-muted-foreground">
            SupraCalm est une boisson adaptogène à base d&apos;Ashwagandha, de L-Théanine et de
            Magnésium. Un stick par jour suffit pour réduire le stress et équilibrer votre
            cortisol — sans somnolence, sans accoutumance.
          </p>

          <ul className="flex flex-col gap-2.5">
            {[
              'Réduit le stress et l\u2019anxiété du quotidien',
              'Améliore la concentration et la clarté mentale',
              'Favorise un sommeil profond et réparateur',
              '100% naturel — sans colorants ni édulcorants',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-foreground">
                <Leaf className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-accent">
              {popular.price} {CURRENCY}
            </span>
            <span className="text-lg text-muted-foreground line-through">
              {popular.oldPrice} {CURRENCY}
            </span>
            <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">
              -40%
            </span>
          </div>

          <a
            href="#commander"
            className="w-full rounded-xl bg-accent px-8 py-4 text-center text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.02] md:w-auto"
          >
            COMMANDER MAINTENANT
          </a>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Truck className="h-4 w-4" aria-hidden="true" />
              Livraison 24-48h
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Paiement à la livraison
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
