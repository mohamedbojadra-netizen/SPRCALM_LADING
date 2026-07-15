import { Star, BadgeCheck } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Salma B. — Casablanca',
    text: 'Après 2 semaines, je dors beaucoup mieux et je me sens moins tendue au travail. Le goût framboise-citron est très agréable !',
  },
  {
    name: 'Youssef E. — Rabat',
    text: 'J\u2019étais sceptique au début, mais franchement ça marche. Plus de concentration pendant mes journées et moins de stress le soir.',
  },
  {
    name: 'Imane K. — Marrakech',
    text: 'Livraison rapide et produit conforme. Je le prends chaque matin, je sens vraiment la différence sur mon humeur.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-balance text-center text-2xl font-bold text-foreground md:text-3xl">
          Ils ont testé SupraCalm
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="flex flex-col gap-3 rounded-2xl bg-card p-6 shadow-sm">
              <span className="flex" aria-label="5 étoiles sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </span>
              <blockquote className="text-sm leading-relaxed text-foreground">
                {review.text}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
