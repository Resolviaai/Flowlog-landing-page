import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "Flow Log | The Professional Editor's OS",
  description: "A premium 1-on-1 client management dashboard for freelance video editors.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-zinc-950 text-zinc-50 font-sans antialiased selection:bg-indigo-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
