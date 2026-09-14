import Link from 'next/link'
export default function NotFound(){return <main className="page"><div className="container empty"><span className="eyebrow">404</span><h1>Cette page n’existe pas.</h1><p>Retournez à l’accueil ou explorez nos voyages.</p><Link className="btn btn-blue" href="/">Retour à l’accueil</Link></div></main>}
