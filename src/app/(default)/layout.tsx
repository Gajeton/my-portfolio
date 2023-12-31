'use client'
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="resp:mt-4 mt-14 resp:mx-2 max-w-screen-lg mx-auto">{children}</main>;
}
