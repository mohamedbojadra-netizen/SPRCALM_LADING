// ⚙️ CONFIGURATION — بدل هاد المعلومات على حسب الحاجة
export const WHATSAPP_NUMBER = '212600000000' // ← حط هنا رقم WhatsApp ديالك (بدون +)

export const PRODUCT_NAME = 'SupraCalm'

export type Pack = {
  id: string
  label: string
  sublabel: string
  qty: number
  price: number
  oldPrice: number
  badge?: string
}

export const PACKS: Pack[] = [
  {
    id: 'pack-1',
    label: '1 Sachet',
    sublabel: '20 jours de cure',
    qty: 1,
    price: 249,
    oldPrice: 329,
  },
  {
    id: 'pack-2',
    label: '2 + 1 GRATUIT',
    sublabel: '60 jours de cure',
    qty: 3,
    price: 449,
    oldPrice: 747,
    badge: 'LE PLUS POPULAIRE',
  },
  {
    id: 'pack-3',
    label: '3 + 2 GRATUITS',
    sublabel: '100 jours de cure',
    qty: 5,
    price: 649,
    oldPrice: 1245,
    badge: 'MEILLEURE OFFRE',
  },
]

export const CURRENCY = 'DH'
