import "@/app/globals.css";

export default function ApiDocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen'>{children}</div>
      </body>
    </html>
  );
}
