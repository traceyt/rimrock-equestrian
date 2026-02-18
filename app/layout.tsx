import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rimrock Equestrian — Fall City, WA",
  description:
    "Boarding, training, and lessons in eventing and dressage. Located in Fall City, Washington.",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-foreground/80 hover:text-green-dark transition-colors"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {/* Navigation */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-warm-tan/30">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/rimrock-logo-text.png"
                alt="Rimrock Equestrian"
                width={180}
                height={139}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <div className="hidden sm:flex items-center gap-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
            {/* Mobile nav - simple links */}
            <div className="sm:hidden flex items-center gap-4">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-green-dark text-white/90">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Rimrock Equestrian
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We believe in having fun with your horse!
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  468 292nd Ave NE
                  <br />
                  Fall City, WA 98024
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Contact</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Phone:{" "}
                  <a href="tel:+14255035368" className="hover:text-white">
                    (425) 503-5368
                  </a>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:rimrock1992@hotmail.com"
                    className="hover:text-white"
                  >
                    rimrock1992@hotmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 text-center text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Rimrock Equestrian. All rights
              reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
