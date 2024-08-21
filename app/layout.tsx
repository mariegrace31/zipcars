import { ClerkProvider, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import './globals.css';
import { Outfit } from 'next/font/google';
import NavBar from '@/components/NavBar';


const outfit = Outfit({ subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <NavBar />
            {children}
            </SignedIn>
          </header>
          <main>
            
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
