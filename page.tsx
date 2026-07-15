import { Hero } from '@/components/hero'
import { Benefits } from '@/components/benefits'
import { Testimonials } from '@/components/testimonials'
import { OrderForm } from '@/components/order-form'
import { Faq } from '@/components/faq'
import { StickyCta } from '@/components/sticky-cta'

export default function Page() {
  return (
    <main className="pb-20 md:pb-0">
      <Hero />
      <Benefits />
      <Testimonials />
      <OrderForm />
      <Faq />
      <footer className="bg-primary px-4 py-6 text-center text-sm text-primary-foreground/70">
        <p>SupraCalm — Votre allié naturel pour plus de calme et de sérénité.</p>
        <p className="mt-1">Paiement à la livraison | Livraison 24-48h</p>
      </footer>
      <StickyCta />
    </main>
  )
}
