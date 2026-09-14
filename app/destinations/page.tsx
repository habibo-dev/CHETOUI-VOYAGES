import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { destinations } from '@/lib/data'
import { PageShell } from '@/components/site'
export default function Destinations(){return <PageShell><main className="page"><section className="page-hero"><div className="container"><span className="eyebrow">DESTINATIONS</span><h1>Des destinations à découvrir.</h1><p>Explorez les inspirations de voyage de Chetoui Voyages et préparez votre prochaine demande.</p></div></section><section className="section"><div className="container destination-grid">{destinations.map(d=><Link className="destination-card" href={`/destinations/${d.slug}`} key={d.slug} style={{backgroundImage:`url(${d.image})`}}><div><span>{d.country}</span><h2>{d.name}</h2><p>Voir les informations <ArrowRight size={16}/></p></div></Link>)}</div></section></main></PageShell>}
