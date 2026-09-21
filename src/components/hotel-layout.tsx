import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { hotel } from "@/lib/hotel";

const links = [
  ["Home", "/"], ["Rooms", "/rooms"], ["About", "/about"],
  ["Amenities", "/amenities"], ["Dining", "/dining"], ["Gallery", "/gallery"],
  ["Experiences", "/experiences"], ["Location", "/location"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-header-line bg-header/94 text-header-foreground backdrop-blur-lg">
    <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 lg:px-8">
      <Link to="/" onClick={() => setOpen(false)} className="flex flex-col leading-none">
        <span className="font-display text-lg uppercase tracking-[0.08em] sm:text-xl">Wonder Hill Inn</span>
        <span className="mt-1 text-[9px] uppercase tracking-[0.34em] text-accent">Narkanda</span>
      </Link>
      <nav className="hidden items-center gap-5 xl:flex">
        {links.map(([label, to]) => <Link key={to} to={to} className={`nav-link ${path === to ? "nav-link-active" : ""}`}>{label}</Link>)}
      </nav>
      <div className="hidden items-center gap-3 sm:flex">
        <Button asChild variant="gold" size="lg"><Link to="/contact">Book Your Stay</Link></Button>
      </div>
      <Button aria-label={open ? "Close menu" : "Open menu"} variant="ghost" size="icon" className="text-header-foreground xl:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-header-line bg-header px-5 py-6 xl:hidden">
      <div className="grid gap-1">{links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-header-line py-3 text-sm uppercase tracking-[0.12em]">{label}</Link>)}</div>
      <Button asChild variant="gold" size="lg" className="mt-5 w-full"><Link to="/contact" onClick={() => setOpen(false)}>Book Your Stay</Link></Button>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-header text-header-foreground">
    <div className="border-b border-header-line px-5 py-16 text-center">
      <p className="eyebrow text-accent">A quiet place above the road</p>
      <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl sm:text-6xl">Plan Your Narkanda Stay</h2>
      <Button asChild variant="gold" size="lg" className="mt-8"><Link to="/contact">Book Your Stay <ArrowUpRight /></Link></Button>
    </div>
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
      <div><p className="font-display text-2xl">Hotel Wonder Hill Inn</p><p className="mt-1 text-xs uppercase tracking-[0.25em] text-accent">Narkanda</p><p className="mt-5 max-w-sm text-sm leading-7 text-header-muted">{hotel.address}</p></div>
      <div><p className="footer-title">Contact</p><a className="footer-link" href={hotel.phone1Href}>{hotel.phone1}</a><a className="footer-link" href={hotel.phone2Href}>{hotel.phone2}</a><a className="footer-link" href={`mailto:${hotel.email}`}>{hotel.email}</a></div>
      <div><p className="footer-title">Explore</p>{links.slice(1).map(([label,to]) => <Link className="footer-link" key={to} to={to}>{label}</Link>)}</div>
    </div>
    <div className="border-t border-header-line px-5 py-5 text-center text-[10px] uppercase tracking-[0.18em] text-header-muted">Hotel / Homestay · Narkanda, Himachal Pradesh</div>
  </footer>;
}

export function PageHero({ image, eyebrow, title, children, position = "center" }: { image: string; eyebrow: string; title: string; children?: ReactNode; position?: string }) {
  return <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-header pt-20 text-header-foreground">
    <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover motion-safe:animate-subtle-zoom" style={{ objectPosition: position }} />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8 lg:pb-20"><p className="eyebrow text-accent">{eyebrow}</p><h1 className="mt-3 max-w-4xl font-display text-5xl leading-[0.96] sm:text-7xl lg:text-8xl">{title}</h1>{children}</div>
  </section>;
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

export function BookingBand() {
  return <section className="bg-primary px-5 py-10 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="eyebrow text-accent">Direct enquiries</p><h2 className="mt-2 font-display text-3xl sm:text-4xl">Ready for the hills?</h2></div><div className="flex flex-wrap gap-3"><Button asChild variant="gold" size="lg"><Link to="/contact">Book Your Stay</Link></Button><Button asChild variant="hotelOutline" size="lg"><a href={hotel.phone1Href}><Phone /> Call Now</a></Button></div></div></section>;
}