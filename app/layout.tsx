import type { Metadata } from 'next'
import './globals.css'
import './site-header.css'
export const metadata: Metadata = {title:{default:'Chetoui Voyages | Agence de voyage',template:'%s | Chetoui Voyages'},description:'Voyages organisés, Omra, billetterie, hôtels et demandes personnalisées avec Chetoui Voyages.',keywords:['Chetoui Voyages','Voyages Chetoui','agence de voyage Khemis Miliana','Omra','voyage organisé','billetterie','réservation hôtel'],openGraph:{title:'Chetoui Voyages',description:'Explorez, préparez et demandez votre prochain voyage.',type:'website',locale:'fr_DZ'},robots:{index:true,follow:true}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
