import type { Metadata } from 'next'


//import stylesheet - apply to every route
import './globals.css'
 

export const metadata: Metadata = {
  title: {
    default: "Kike Africa",
    template: "%s | Kike Africa",
  },
  description: "Kike Africa is a pioneering media and technology company at the forefront of civic technology, and serving as a vibrant coding & data hub for young women in Tanzania. We also offer expert consultation services to drive innovation and success.",
  metadataBase: new URL("https://kikeafrica.co.tz"),
  openGraph: {
    title: "Kike Africa",
    description: "Kike Africa is a pioneering media and technology company at the forefront of civic technology, and serving as a vibrant coding & data hub for young women in Tanzania. We also offer expert consultation services to drive innovation and success.",
    url: "https://kikeafrica.co.tz",
    siteName: "Kike Africa",
    images: [
      {
        url: "https://kikeafrica.co.tz/images/image.jpg",
        type: "image/jpeg"
      }
    ],
    locale: "en_US",
    type: "website" 
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
