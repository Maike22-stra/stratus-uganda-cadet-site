import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stratus Aviation Group | Uganda Cadet Pathway',
  description: 'Airline-oriented cadet pilot pathway for Uganda and East Africa.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
