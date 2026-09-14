import Link from 'next/link'
import { MessageCircle, Phone, Search } from 'lucide-react'
import { phone, whatsapp } from '@/lib/data'

export function Header(){return <header className="site-header"><div className="container nav"><Link className="brand" href="/"><span className="brand-mark">CV</span><span><b>CHETOUI</b><strong>VOYAGES</strong><small>مجموعة شتوي للسياحة</small></span></Link><nav className="links"><Link href="/voyages">Voyages</Link><Link href="/destinations">Destinations</Link><Link href="/omra">Omra</Link><Link href="/billetterie">Billetterie</Link><Link href="/hotels">Hôtels</Link><Link href="/offres">Offres</Link><Link href="/agences">Nos agences</Link><Link href="/a-propos">À propos</Link><Link href="/contact">Contact</Link></nav><div className="actions"><span className="lang">FR / AR</span><Link className="btn btn-orange" href="/demande">Demander un devis</Link></div></div></header>}

export function MobileBar(){return <div className="mobile-bar"><a href={phone}><Phone size={16}/>Appeler</a><a href={whatsapp('Bonjour Chetoui Voyages, je souhaite obtenir des informations concernant un voyage.')}><MessageCircle size={16}/>WhatsApp</a><Link href="/demande"><Search size={16}/>Demander</Link></div>}

export function Footer(){return <footer className="footer"><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">CV</span><span><b>CHETOUI</b><strong>VOYAGES</strong></span></div><p>Groupe Chetoui Voyages — agence de voyage et services touristiques.</p></div><div><b>Explorer</b><Link href="/voyages">Voyages</Link><Link href="/destinations">Destinations</Link><Link href="/omra">Omra</Link><Link href="/offres">Offres</Link></div><div><b>Contact</b><a href={phone}>0550 80 65 94</a><a href="mailto:voyageschetoui@gmail.com">voyageschetoui@gmail.com</a><Link href="/agences">Nos agences</Link></div></div><div className="footer-bottom">© {new Date().getFullYear()} Chetoui Voyages · Informations et disponibilités à confirmer auprès de l’agence.</div></footer>}

export function PageShell({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/><MobileBar/></>}
