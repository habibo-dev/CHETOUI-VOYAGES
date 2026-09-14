import Link from 'next/link'
import { ArrowRight, Tag } from 'lucide-react'
import { offers } from '@/lib/data'
import { PageShell } from '@/components/site'
export default function Offres(){return <PageShell><main className="page"><section className="page-hero"><div className="container"><span className="eyebrow">OFFRES</span><h1>Les offres et inspirations du moment.</h1><p>Une vitrine éditoriale pour découvrir les programmes disponibles. Les prix et dates sont confirmés par l’agence.</p></div></section><section className="section"><div className="container offer-grid">{offers.map(o=><article className="offer-card" key={o.slug}><img src={o.image} alt={o.title}/><div><span className="offer-label"><Tag size={14}/>{o.type}</span><h2>{o.title}</h2><p>{o.description}</p><strong>Prix sur demande</strong><Link className="btn btn-blue" href={`/voyages/${o.slug}`}>Voir les détails <ArrowRight size={16}/></Link></div></article>)}</div></section></main></PageShell>}
