import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://chetoui-voyages.vercel.app'; return ['', '/voyages','/destinations','/omra','/billetterie','/hotels','/offres','/agences','/demande','/a-propos','/contact'].map(path=>({url:base+path,lastModified:new Date()})); }
