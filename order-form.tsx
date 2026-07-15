'use client'

import { useState } from 'react'
import { CURRENCY, PACKS, PRODUCT_NAME, WHATSAPP_NUMBER } from '@/lib/product'
import { CheckCircle2, Loader2, ShieldCheck, Truck } from 'lucide-react'

export function OrderForm() {
  const [selectedPack, setSelectedPack] = useState(PACKS[1].id)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const pack = PACKS.find((p) => p.id === selectedPack) ?? PACKS[1]

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !phone.trim() || !city.trim()) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }
    if (phone.trim().replace(/\D/g, '').length < 9) {
      setError('Veuillez entrer un numéro de téléphone valide.')
      return
    }

    setSubmitting(true)

    const message = [
      `🛒 NOUVELLE COMMANDE — ${PRODUCT_NAME}`,
      ``,
      `📦 Offre : ${pack.label} (${pack.sublabel})`,
      `💰 Prix : ${pack.price} ${CURRENCY} (au lieu de ${pack.oldPrice} ${CURRENCY})`,
      ``,
      `👤 Nom : ${name.trim()}`,
      `📞 Téléphone : ${phone.trim()}`,
      `🏙️ Ville : ${city.trim()}`,
      address.trim() ? `📍 Adresse : ${address.trim()}` : '',
      ``,
      `💵 Paiement à la livraison`,
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    if (typeof window !== 'undefined') {
      if (window.self !== window.top) {
        window.open(url, '_blank')
      } else {
        window.location.href = url
      }
    }

    setTimeout(() => setSubmitting(false), 1500)
  }

  return (
    <section id="commander" className="scroll-mt-4 bg-primary py-12 md:py-16">
      <div className="mx-auto max-w-lg px-4">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-2xl font-bold text-primary-foreground md:text-3xl">
            Commandez maintenant
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Remplissez le formulaire — payez uniquement à la livraison
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl bg-card p-6 shadow-xl md:p-8"
        >
          {/* Pack selection */}
          <fieldset className="flex flex-col gap-3">
            <legend className="mb-2 text-sm font-semibold text-foreground">
              Choisissez votre offre :
            </legend>
            {PACKS.map((p) => (
              <label
                key={p.id}
                className={`relative flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-colors ${
                  selectedPack === p.id
                    ? 'border-accent bg-accent/5'
                    : 'border-border bg-card hover:border-muted-foreground/40'
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-2.5 left-4 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
                    {p.badge}
                  </span>
                )}
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="pack"
                    value={p.id}
                    checked={selectedPack === p.id}
                    onChange={() => setSelectedPack(p.id)}
                    className="h-4 w-4 accent-current"
                  />
                  <span className="flex flex-col">
                    <span className="font-bold text-foreground">{p.label}</span>
                    <span className="text-xs text-muted-foreground">{p.sublabel}</span>
                  </span>
                </span>
                <span className="flex flex-col items-end">
                  <span className="font-bold text-accent">
                    {p.price} {CURRENCY}
                  </span>
                  <span className="text-xs text-muted-foreground line-through">
                    {p.oldPrice} {CURRENCY}
                  </span>
                </span>
              </label>
            ))}
          </fieldset>

          {/* Contact fields */}
          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-foreground">
                Nom complet <span className="text-accent">*</span>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom et prénom"
                autoComplete="name"
                className="rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-foreground">
                Téléphone <span className="text-accent">*</span>
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="06 XX XX XX XX"
                autoComplete="tel"
                inputMode="tel"
                className="rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-foreground">
                Ville <span className="text-accent">*</span>
              </span>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Votre ville"
                autoComplete="address-level2"
                className="rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-foreground">
                Adresse <span className="text-xs font-normal text-muted-foreground">(optionnel)</span>
              </span>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Quartier, rue, n°..."
                autoComplete="street-address"
                className="rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
          </div>

          {error && (
            <p role="alert" className="rounded-lg bg-destructive/10 px-4 py-2.5 text-sm font-medium text-destructive">
              {error}
            </p>
          )}

          {/* Total */}
          <div className="flex items-center justify-between rounded-xl bg-secondary px-4 py-3">
            <span className="font-semibold text-secondary-foreground">Total à payer :</span>
            <span className="text-xl font-bold text-accent">
              {pack.price} {CURRENCY}
            </span>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
          >
            {submitting ? (
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            )}
            {submitting ? 'Envoi en cours...' : 'CONFIRMER MA COMMANDE'}
          </button>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Truck className="h-4 w-4" aria-hidden="true" />
              Livraison rapide
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Paiement à la livraison
            </span>
          </div>
        </form>
      </div>
    </section>
  )
}
