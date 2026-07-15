import Image from 'next/image'
import { Brain, Moon, HeartPulse, Sparkles } from 'lucide-react'

const BENEFITS = [
  {
    icon: Sparkles,
    title: 'Réduit le stress',
    text: 'L\u2019Ashwagandha aide à se détendre et à relâcher la pression du quotidien.',
  },
  {
    icon: Brain,
    title: 'Soutient la concentration',
    text: 'La L-Théanine favorise la clarté mentale et la productivité, sans somnolence.',
  },
  {
    icon: Moon,
    title: 'Sommeil réparateur',
    text: 'Le Magnésium Glycinate contribue à un sommeil profond et de meilleure qualité.',
  },
  {
    icon: HeartPulse,
    title: 'Équilibre le cortisol',
    text: 'Une formule complète qui soutient l\u2019équilibre du corps et de l\u2019esprit.',
  },
]

export function Benefits() {
  return (
    <section className="bg-card py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-balance text-center text-2xl font-bold text-foreground md:text-3xl">
          Pourquoi plus de 2 400 personnes ont choisi SupraCalm
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-muted-foreground">
          Une formule naturelle, pensée pour agir sur les 4 piliers de votre bien-être.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl bg-secondary p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Image
            src="/images/product-2.png"
            alt="Offre SupraCalm : 3 achetés + 2 gratuits avec livraison rapide et paiement à la livraison"
            width={680}
            height={544}
            className="mx-auto w-full max-w-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
