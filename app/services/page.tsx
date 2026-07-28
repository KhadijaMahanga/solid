import Link from 'next/link';
import Service from '@/components/Service';
import SectionTitle from '@/components/SectionTitle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Media training, tech capacity building, and consultancy from Kike Africa — including AI & workflow automation, custom web apps, and data pipelines for media houses, NGOs, and SMEs in Tanzania.',
  openGraph: {
    title: 'Services | Kike Africa',
    description:
      'Media training, tech capacity building, and consultancy from Kike Africa — including AI & workflow automation, custom web apps, and data pipelines for media houses, NGOs, and SMEs in Tanzania.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-10 md:pt-40">
        <div className="container">
          <SectionTitle
            title="Services"
            paragraph="We blend media expertise with technical excellence — training people, and building the automation, web, and data tools that organizations in Tanzania need to run more efficiently."
            center
          />
        </div>
      </section>

      <Service />

      <section className="py-10">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">See it in practice</h2>
          <p className="text-body-color dark:text-body-color-dark max-w-2xl mx-auto mb-6">
            From automating invoice processing to building custom apps, see the kind of work
            our tech consultancy delivers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-sm border border-primary px-8 py-3 text-base font-medium text-primary transition duration-300 hover:bg-primary hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
