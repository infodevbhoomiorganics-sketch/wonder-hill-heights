import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingBand, PageHero, SectionHeading } from "@/components/hotel-layout";
import { hotel, images, makeHead } from "@/lib/hotel";

export const Route = createFileRoute("/rooms")({ head: () => makeHead("Rooms at Hotel Wonder Hill Inn Narkanda", "Explore Standard, Deluxe and Family Rooms at Hotel Wonder Hill Inn Narkanda, with comfortable accommodation and mountain surroundings.", "/rooms"), component: RoomsPage });

const rooms = [
  { title: "Standard Room", text: "A simple, comfortable place to rest after a day on the road or exploring Narkanda.", image: images.roomWoodland, facilities: ["Free Wi-Fi", "Room service", "24-hour front desk"] },
  { title: "Deluxe Room", text: "A warm, spacious-feeling room that brings the valley and mountain setting into your stay.", image: images.roomDeluxe, facilities: ["Mountain / valley views", "Free Wi-Fi", "Room service"] },
  { title: "Family Room", text: "Comfortable accommodation designed for families and larger groups travelling together.", image: images.familyRoom, facilities: ["Family accommodation", "Free Wi-Fi", "Room service"] },
];

function RoomsPage() { return <><PageHero image={images.roomDeluxe} eyebrow="Rooms" title="Rest well in the mountain quiet"><p className="mt-6 max-w-xl text-lg text-header-muted">Three comfortable room categories for solo stops, couples, families and groups.</p></PageHero><section className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Choose your room" title="Comfort, without complication." copy="Starting from approximately ₹635/night. Prices vary by season, room type and booking platform." /><div className="mt-16 space-y-24">{rooms.map((room,i)=><article key={room.title} className="grid gap-10 lg:grid-cols-2 lg:items-center"><div className={`image-reveal aspect-[4/3] ${i%2 ? "lg:order-2" : ""}`}><img src={room.image} alt={`${room.title} at Hotel Wonder Hill Inn Narkanda`} className="h-full w-full object-cover" /></div><div className={i%2 ? "lg:pr-14" : "lg:pl-14"}><p className="eyebrow">Room 0{i+1}</p><h2 className="mt-3 font-display text-5xl">{room.title}</h2><p className="mt-5 leading-8 text-muted-foreground">{room.text}</p><ul className="mt-7 border-y py-4">{room.facilities.map(x=><li key={x} className="py-2 text-sm">— {x}</li>)}</ul><div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="hotel" size="lg"><Link to="/contact">Check Availability <ArrowUpRight /></Link></Button><Button asChild variant="outline" size="lg"><a href={hotel.phone1Href}><Phone /> Book by Phone</a></Button></div></div></article>)}</div></div></section><BookingBand /></> }