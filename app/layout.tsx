import { ClerkProvider, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import './globals.css';
import NavBar from '@/components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
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
