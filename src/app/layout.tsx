import type { Metadata } from "next";
import {IBM_Plex_Mono,
  Libre_Franklin,
  Source_Serif_4,} from 'next/font/google';
import './globals.css';

const display = Libre_Franklin({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['500', '600', '700', '800'],
});

const body = Source_Serif_4({
    subsets: ['latin'],
    variable: '--font-body',
    weight: ['400', '600'],
});

const mono = IBM_Plex_Mono({
    subsets: ['latin'],
    variable: '--font-data',
    weight: ['400', '500'],
});

export const metadata: Metadata = {
     title: "Veracity — Every story, cross-checked",
  description:
    "Daily news, summarized and corroborated across independent sources, with links to the proof.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
                <header className="site-header">
                    <a className="wordmark" href="/">
                    Veracity
                    </a>
                    <p className="tagline">Every story, cross-checked</p>
                </header>
                <main className="feed-wrap">{children}</main>

                <footer className="site-footer">
                    <p>
                        Summaries and corroboration scores are generated automatically.
            Always follow the source links to verify.
                    </p>
                </footer>
            </body>
        </html>
    );
}