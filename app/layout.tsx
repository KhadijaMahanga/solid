import type { Metadata } from 'next'


//import stylesheet - apply to every route
import '../styles/global.css'
 

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
        url: "/opengraph-image.png",
        type: "image/png"
      }
    ],
    locale: "en_US",
    type: "website" 
  },
  keywords: ["media", "technology", "women", "tanzania", "technology consulting", "media consulting", "habari", "wanawake", "kiketech talks", "tech talks", "kike media festival", "girl tech"],
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
