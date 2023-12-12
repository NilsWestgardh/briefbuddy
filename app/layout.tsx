import '@/app/config/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-100">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
};