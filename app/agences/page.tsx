import Link from 'next/link'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { branches } from '@/lib/data'
import { PageShell } from '@/components/site'
export default function Agences(){return <PageShell><main className="page"><section className="page-hero"><div className="container"><span className="eyebrow">NOS AGENCES</span><h1>Retrouvez Chetoui Voyages près de vous.</h1><p>Quatre implantations sont indiquées dans les informations publiques fournies à l’agence.</p></div></section><section className="section"><div className="container branch-grid">{branches.map(b=><article className="branch-card" key={b.slug}><div className="branch-icon"><MapPin/></div><h2>{b.name}</h2><p>{b.description}</p><a href={`tel:+213${b.phone.replaceAll(' ','').replace(/^0/,'')}`}><Phone size={16}/>{b.phone}</a><Link className="btn btn-blue" href={`/agences/${b.slug}`}>Voir l’agence <ArrowRight size={16}/></Link></article>)}</div></section></main></PageShell>}
