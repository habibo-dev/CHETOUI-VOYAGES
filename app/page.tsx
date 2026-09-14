'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, Heart, MapPin, Menu, MessageCircle, Phone, Search, Sparkles, Star, Users, X } from 'lucide-react';

const WA = '213550806594';
const PHONE = 'tel:+213550806594';

const trips = [
  { id:'istanbul', title:'Istanbul', country:'Turquie', tag:'Voyage organisé', image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85' },
  { id:'dubai', title:'Dubai', country:'Émirats arabes unis', tag:'Séjour', image:'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=85' },
  { id:'paris', title:'Paris', country:'France', tag:'City break', image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85' },
  { id:'omra', title:'Omra', country:'Arabie Saoudite', tag:'Programme sur demande', image:'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1400&q=85' }
];

const whatsapp = (message:string) => `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [toast, setToast] = useState('');
  const results = useMemo(() => query ? trips.filter(t => `${t.title} ${t.country} ${t.tag}`.toLowerCase().includes(query.toLowerCase())) : trips, [query]);
  const toggleFavorite = (id:string) => setFavorites(v => v.includes(id) ? v.filter(x=>x!==id) : [...v,id]);

  return <main>
    <header className="header"><div className="container nav">
      <a className="brand" href="#top"><span className="brand-mark">CV</span><span><b>CHETOUI</b><strong>VOYAGES</strong><small>مجموعة شتوي للسياحة</small></span></a>
      <nav className="links">{['Voyages','Destinations','Omra','Billetterie','Hôtels','Offres','Nos agences','À propos'].map(x => <a key={x} href={`#${x.toLowerCase().replaceAll(' ','-')}`}>{x}</a>)}</nav>
      <div className="actions"><a className="lang" href="#ar">FR / AR</a><a className="btn btn-orange" href="/demande">Demander un devis</a><button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Menu"><Menu/></button></div>
    </div>{menu&&<div className="mobile-menu">{['Voyages','Destinations','Omra','Billetterie','Hôtels','Offres','Nos agences','À propos'].map(x => <a key={x} href={`#${x.toLowerCase().replaceAll(' ','-')}`} onClick={()=>setMenu(false)}>{x}</a>)}<a className="btn btn-orange" href="/demande">Demander un devis</a></div>}</header>

    <section id="top" className="hero"><div className="hero-bg"/><div className="hero-overlay"/><div className="container hero-content"><div className="pill">CHETOUI VOYAGES · DEPUIS 2010</div><h1>Votre prochain voyage<br/><em>commence ici.</em></h1><p>Une expérience de voyage pensée pour découvrir, comparer et demander votre programme en quelques clics.</p><div className="hero-actions"><a className="btn btn-orange btn-lg" href="#voyages">Explorer nos voyages <ArrowRight size={18}/></a><a className="btn btn-darkglass btn-lg" href="/demande">Demander un devis</a></div></div>
      <div className="container search-card"><div className="search-title"><span>RECHERCHE</span><h2>Où souhaitez-vous partir ?</h2><p>Ex. « Je cherche un voyage à Istanbul pour 2 personnes. »</p></div><div className="search-row"><label className="searchbox"><Search size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Destination ou demande libre…"/></label><label><span>Type</span><select><option>Tous les types</option><option>Voyage organisé</option><option>Omra</option><option>Hôtel</option><option>Billetterie</option></select></label><label><span>Voyageurs</span><select><option>2 voyageurs</option><option>1 voyageur</option><option>3+ voyageurs</option></select></label><button className="search-btn" onClick={()=>document.getElementById('voyages')?.scrollIntoView({behavior:'smooth'})}><Search size={18}/> Rechercher</button></div></div>
    </section>

    <section id="voyages" className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">DÉCOUVRIR</span><h2>Des idées de voyage, au même endroit.</h2></div><a href="#destinations" className="link">Voir toutes les destinations <ArrowRight size={17}/></a></div><div className="cards">{results.map(t=><article className="travel-card" key={t.id}><div className="card-media" style={{backgroundImage:`url(${t.image})`}}><span className="tag">{t.tag}</span><button className={favorites.includes(t.id)?'heart active':'heart'} onClick={()=>toggleFavorite(t.id)} aria-label="Favori"><Heart size={18} fill={favorites.includes(t.id)?'currentColor':'none'}/></button></div><div className="card-body"><div className="meta"><span><MapPin size={15}/>{t.country}</span><span><Star size={14}/> Sur demande</span></div><h3>{t.title}</h3><p>Programme disponible sur demande auprès de Chetoui Voyages.</p><div className="card-actions"><a className="btn btn-blue" href={`/voyages/${t.id}`}>Voir le voyage <ArrowRight size={16}/></a><button className="icon-btn" onClick={()=>setToast('Voyage ajouté à vos favoris.')}>+</button></div></div></article>)}</div></div></section>

    <section className="blue-section"><div className="container grid2"><div><span className="eyebrow white">SOCIAL → WEBSITE → LEAD</span><h2>Votre communauté devient<br/>une vraie expérience digitale.</h2><p>Conçu pour les visiteurs venant de Facebook, Instagram et TikTok : une publication, une destination, une demande claire.</p><a className="btn btn-orange" href="/demande">Préparer mon voyage <ArrowRight size={17}/></a></div><div className="stats"><div><b>2010</b><span>Expérience communiquée</span></div><div><b>4</b><span>Implantations indiquées publiquement</span></div><div><b>FR / AR</b><span>Expérience bilingue</span></div></div></div></section>

    <section id="omra" className="section"><div className="container feature"><div className="feature-image" style={{backgroundImage:"url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=85')"}}/><div className="feature-copy"><span className="eyebrow">OMRA</span><h2>Un espace dédié, respectueux et simple.</h2><p>Consultez les programmes lorsqu’ils sont disponibles et envoyez une demande directe sans inventer de tarifs ou de disponibilités.</p><ul><li><CalendarDays size={17}/> Programmes sur demande</li><li><Users size={17}/> Départs et voyageurs</li><li><Sparkles size={17}/> Demande personnalisée</li></ul><a className="btn btn-blue" href="/omra">Découvrir la Omra <ArrowRight size={17}/></a></div></div></section>

    <section id="destinations" className="section light"><div className="container"><div className="section-head"><div><span className="eyebrow">DESTINATIONS</span><h2>Inspirations pour votre prochain départ.</h2></div></div><div className="destination-strip">{trips.map((t,i)=><a key={t.id} className="destination-tile" href={`/destinations/${t.id}`} style={{backgroundImage:`url(${t.image})`}}><div><span>0{i+1}</span><h3>{t.title}</h3><p>{t.country}</p></div></a>)}</div></div></section>

    <section id="contact" className="cta"><div className="container cta-in"><div><span className="eyebrow white">CHETOUI VOYAGES</span><h2>Une idée de voyage ?<br/>Parlons-en.</h2></div><div className="cta-buttons"><a className="btn btn-white" href={PHONE}><Phone size={18}/> 0550 80 65 94</a><a className="btn btn-orange" href={whatsapp('Bonjour Chetoui Voyages, je souhaite obtenir des informations concernant un voyage.')}>WhatsApp <MessageCircle size={18}/></a></div></div></section>

    <footer className="footer"><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">CV</span><span><b>CHETOUI</b><strong>VOYAGES</strong></span></div><p>Groupe Chetoui Voyages — une présence locale et une expérience voyage pensée pour l’Algérie.</p></div><div><b>Contact</b><a href={PHONE}>0550 80 65 94</a><a href="mailto:voyageschetoui@gmail.com">voyageschetoui@gmail.com</a></div><div><b>Agences</b><span>Bab Ezzouar</span><span>Beni Slimane</span><span>Khemis Miliana</span><span>Aïn Oussera</span></div></div><div className="footer-bottom">© Chetoui Voyages · Informations publiques à confirmer avant publication finale.</div></footer>
    {toast&&<button className="toast" onClick={()=>setToast('')}>{toast}<X size={16}/></button>}
    <div className="mobile-bar"><a href={PHONE}><Phone size={16}/> Appeler</a><a href={whatsapp('Bonjour Chetoui Voyages, je souhaite obtenir des informations.') }><MessageCircle size={16}/> WhatsApp</a><a href="/demande"><Sparkles size={16}/> Demander</a></div>
  </main>
}
