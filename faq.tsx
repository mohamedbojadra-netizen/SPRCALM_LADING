const FAQS = [
  {
    q: 'Comment prendre SupraCalm ?',
    a: 'Mélangez un stick dans un verre d\u2019eau froide, une fois par jour, de préférence le matin ou en début d\u2019après-midi. Chaque sachet contient 20 sticks (20 jours).',
  },
  {
    q: 'Quand vais-je sentir les effets ?',
    a: 'La plupart des clients ressentent un effet apaisant dès les premiers jours. Pour des résultats durables sur le sommeil et le cortisol, une cure de 2 à 3 mois est recommandée.',
  },
  {
    q: 'Y a-t-il des effets secondaires ?',
    a: 'SupraCalm est 100% naturel, sans accoutumance et sans somnolence. En cas de grossesse, d\u2019allaitement ou de traitement médical, demandez conseil à votre médecin.',
  },
  {
    q: 'Comment se passe la livraison et le paiement ?',
    a: 'Livraison en 24-48h partout au Maroc. Vous payez uniquement à la réception de votre commande — aucun paiement en ligne.',
  },
]

export function Faq() {
  return (
    <section className="bg-card py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-balance text-center text-2xl font-bold text-foreground md:text-3xl">
          Questions fréquentes
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group rounded-xl bg-secondary px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground">
                {faq.q}
                <span className="ml-4 text-accent transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
