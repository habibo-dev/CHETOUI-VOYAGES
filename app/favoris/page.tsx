'use client'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { Heart } from 'lucide-react'
import { offers } from '@/lib/data'
import { PageShell } from '@/components/site'
export default function Favorites(){const [ids,setIds]=useState<string[]>([]);useEffect(()=>{try{setIds(JSON.parse(localStorage.getItem('chetoui-favorites')||'[]'))}catch{setIds([])}},[]);const saved=offers.filter(o=>ids.includes(o.slug));return <PageShell><main className="page"><section className="page-hero compact"><div className="container"><span className="eyebrow">MES FAVORIS</span><h1>Vos voyages enregistrés.</h1><p>Les favoris anonymes peuvent être conservés dans votre navigateur.</p></div></section><section className="section"><div className="container"><div className="cards">{saved.map(o=><article className="travel-card" key={o.slug}><div className="card-media" style={{backgroundImage:`url(${o.image})`}}/><div className="card-body"><h3>{o.title}</h3><p>{o.country}</p><Link className="btn btn-blue" href={`/voyages/${o.slug}`}>Voir le voyage</Link></div></article>)}</div>{!saved.length&&<div className="empty"><Heart size={40}/><h2>Aucun favori pour le moment.</h2><Link className="btn btn-blue" href="/voyages">Explorer les voyages</Link></div>}</div></section></main></PageShell>}
