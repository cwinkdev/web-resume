import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppStateProvider } from './StateContext';
import ErrorBoundary from './components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Christian Winkler - Frontend Developer',
  description: 'Portfolio website of Christian Winkler, a dedicated Front-End Developer with over 3 years of experience in crafting responsive and intuitive user interfaces.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base">
        <AppStateProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </AppStateProvider>
      </body>
    </html>
  );
}
