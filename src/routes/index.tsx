import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingBand, SectionHeading } from "@/components/hotel-layout";
import { hotel, images, makeHead } from "@/lib/hotel";

export const Route = createFileRoute("/")({
  head: () => ({
    ...makeHead("Hotel Wonder Hill Inn Narkanda | Mountain Stay on NH-5", "Stay at Hotel Wonder Hill Inn Narkanda for comfortable rooms, mountain views, dining and a convenient NH-5 location in Himachal Pradesh.", "/"),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": ["Hotel", "LocalBusiness"], name: hotel.name, address: { "@type": "PostalAddress", streetAddress: "NH-5, Khunni", addressLocality: "Narkanda", addressRegion: "Himachal Pradesh", postalCode: "171213", addressCountry: "IN" }, telephone: [hotel.phone1, hotel.phone2], email: hotel.email, priceRange: "₹", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.1", reviewCount: "103" } }) }],
  }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-header pt-20 text-header-foreground">
      <img src={images.terraceView} alt="Sunlit mountain terrace at Hotel Wonder Hill Inn Narkanda" className="absolute inset-0 h-full w-full object-cover motion-safe:animate-subtle-zoom" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 lg:px-8 lg:pb-16"><p className="eyebrow text-accent">Narkanda • Himachal Pradesh</p><h1 className="mt-4 max-w-4xl font-display text-6xl leading-[.9] sm:text-8xl lg:text-[7.2rem]">Stay Above the Hills of Narkanda</h1><p className="mt-6 max-w-2xl text-base leading-8 text-header-muted sm:text-lg">A comfortable Himalayan stay on NH-5, surrounded by mountain landscapes and beautiful valley views.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="gold" size="lg"><Link to="/contact">Book Your Stay <ArrowUpRight /></Link></Button><Button asChild variant="hotelOutline" size="lg"><Link to="/rooms">Explore Rooms</Link></Button></div><div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-header-muted"><ArrowDown className="size-4" /> Discover Wonder Hill</div></div>
    </section>
    <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><SectionHeading eyebrow="Welcome to Wonder Hill" title="A warm Himalayan base, made for unhurried days." /><div><p className="text-lg leading-9 text-muted-foreground">Set along NH-5 in Khunni, Hotel Wonder Hill Inn offers comfortable accommodation framed by mountain and valley views, with easy access to Narkanda’s attractions.</p><div className="mt-8 flex gap-10 border-t pt-6"><div><strong className="font-display text-3xl">4.1/5</strong><p className="mt-1 text-xs uppercase tracking-[.14em] text-muted-foreground">103 reviews</p></div><div><strong className="font-display text-3xl">NH-5</strong><p className="mt-1 text-xs uppercase tracking-[.14em] text-muted-foreground">Convenient location</p></div></div></div></div></section>
    <section className="bg-secondary px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div className="image-reveal aspect-[4/5]"><img src={images.hotelExterior} alt="Hotel Wonder Hill Inn exterior among Himalayan trees" className="h-full w-full object-cover" /></div><div className="lg:px-12"><p className="eyebrow">At the edge of the forest</p><h2 className="section-title">Close to the road. Far from the rush.</h2><p className="section-copy">Arrive easily from NH-5, then settle into the slower rhythm of the hills. Forest air, changing mountain light and familiar comforts make this an easy stop for a Narkanda journey.</p><Button asChild variant="hotel" size="lg" className="mt-8"><Link to="/about">Our Story <ArrowUpRight /></Link></Button></div></div></section>
    <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="The stay" title="Simple comforts, thoughtfully placed." copy="Everything you need for a comfortable pause in the mountains, without unnecessary fuss." /><div className="mt-14 grid border-y sm:grid-cols-2 lg:grid-cols-4">{["Mountain & Valley Views","Convenient NH-5 Location","Comfortable Rooms","In-House Dining","Free Parking","Free Wi-Fi","Room Service","24-Hour Front Desk"].map((item,i)=><div key={item} className="border-b p-6 sm:border-r lg:nth-[n+5]:border-b-0"><span className="font-display text-2xl text-accent">0{i+1}</span><h3 className="mt-5 text-sm font-medium uppercase tracking-[.08em]">{item}</h3></div>)}</div></div></section>
    <BookingBand />
  </>;
}