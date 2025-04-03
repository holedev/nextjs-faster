export default function ApiDocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen bg-background'>{children}</div>
      </body>
    </html>
  );
}
