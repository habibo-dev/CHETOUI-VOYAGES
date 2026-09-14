import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chetoui Voyages | Agence de voyage',
  description: 'Découvrez les voyages, la Omra, la billetterie et les réservations d’hôtels avec Chetoui Voyages.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
