export type TravelOffer = { slug:string; title:string; country:string; city:string; type:string; duration:string; departure:string; image:string; description:string; themes:string[]; hotel?:string; price?:string }

export const offers: TravelOffer[] = [
 {slug:'istanbul',title:'Istanbul',country:'Turquie',city:'Istanbul',type:'Voyage organisé',duration:'Programme sur demande',departure:'Algérie',image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=85',description:'Découvrez Istanbul entre patrimoine, Bosphore, culture et shopping. Les dates, hôtels et tarifs sont communiqués après demande.',themes:['Culture','Shopping','City break']},
 {slug:'dubai',title:'Dubai',country:'Émirats arabes unis',city:'Dubai',type:'Séjour',duration:'Programme sur demande',departure:'Algérie',image:'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',description:'Un séjour à Dubai à préparer selon vos dates, voyageurs et préférences. Demandez le programme disponible.',themes:['Luxe','Shopping','Famille']},
 {slug:'paris',title:'Paris',country:'France',city:'Paris',type:'City break',duration:'Programme sur demande',departure:'Algérie',image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=85',description:'Paris pour un city break culturel et découverte. Contactez Chetoui Voyages pour les conditions actuelles.',themes:['Culture','City break','Famille']},
 {slug:'omra',title:'Omra',country:'Arabie Saoudite',city:'Makkah & Madinah',type:'Omra',duration:'Programme sur demande',departure:'Algérie',image:'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=85',description:'Programmes Omra disponibles sur demande. Les dates, hébergements et prestations sont à confirmer avec l’agence.',themes:['Religieux','Famille']}
]

export const branches = [
 {slug:'bab-ezzouar',name:'Bab Ezzouar',description:'Face à l’hôtel Ibis',phone:'0550 80 65 94'},
 {slug:'beni-slimane',name:'Beni Slimane',description:'Agence Chetoui Voyages',phone:'0550 80 65 94'},
 {slug:'khemis-miliana',name:'Khemis Miliana',description:'Face à la mosquée El Fourkane',phone:'0550 80 65 94'},
 {slug:'ain-oussara',name:'Aïn Oussera',description:'Face à la mosquée Hamoudi Ben Chahra',phone:'0550 80 65 94'}
]

export const destinations = offers.map(o => ({slug:o.slug,name:o.city,country:o.country,image:o.image,description:o.description}))

export const phone = 'tel:+213550806594'
export const whatsapp = (message:string) => `https://wa.me/213550806594?text=${encodeURIComponent(message)}`
export const email = 'voyageschetoui@gmail.com'
