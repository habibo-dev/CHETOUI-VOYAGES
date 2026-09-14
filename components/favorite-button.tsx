'use client'
import { Heart } from 'lucide-react'
import { useEffect,useState } from 'react'
export default function FavoriteButton({slug}:{slug:string}){const [active,setActive]=useState(false);useEffect(()=>{try{setActive((JSON.parse(localStorage.getItem('chetoui-favorites')||'[]') as string[]).includes(slug))}catch{}} , [slug]);function toggle(){let ids:string[]=[];try{ids=JSON.parse(localStorage.getItem('chetoui-favorites')||'[]')}catch{};ids=ids.includes(slug)?ids.filter(x=>x!==slug):[...ids,slug];localStorage.setItem('chetoui-favorites',JSON.stringify(ids));setActive(ids.includes(slug))}return <button className={active?'heart active':'heart'} onClick={toggle} aria-label="Ajouter aux favoris"><Heart size={18} fill={active?'currentColor':'none'}/></button>}
