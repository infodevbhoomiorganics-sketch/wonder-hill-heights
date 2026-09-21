import roomDeluxe from "@/assets/room-deluxe.png";
import roomWoodland from "@/assets/room-woodland.png";
import reception from "@/assets/reception.png";
import cottage from "@/assets/cottage.png";
import terraceView from "@/assets/terrace-view.png";
import hotelExterior from "@/assets/hotel-exterior.png";
import snowView from "@/assets/snow-view.png";
import dining from "@/assets/dining.png";
import familyRoom from "@/assets/family-room.png";
import nh5View from "@/assets/nh5-view.png";

export const hotel = {
  name: "Hotel Wonder Hill Inn Narkanda",
  phone1: "+91 62841 90218",
  phone2: "+91 70878 47494",
  phone1Href: "tel:+916284190218",
  phone2Href: "tel:+917087847494",
  email: "info@theroomie.in",
  address: "NH-5, Khunni, Narkanda, Himachal Pradesh 171213",
};

export const images = {
  roomDeluxe,
  roomWoodland,
  reception,
  cottage,
  terraceView,
  hotelExterior,
  snowView,
  dining,
  familyRoom,
  nh5View,
};

export const galleryImages = [
  { src: terraceView, alt: "Sunny outdoor terrace overlooking the forested hills of Narkanda" },
  { src: roomDeluxe, alt: "Comfortable guest room at Hotel Wonder Hill Inn with warm wood flooring" },
  { src: snowView, alt: "Snow-covered Himalayan slopes seen through tall cedar trees" },
  { src: roomWoodland, alt: "Wood-panelled guest room with a sitting area and large window" },
  { src: cottage, alt: "Hillside wooden cottage surrounded by apple trees near Narkanda" },
  { src: reception, alt: "Reception and welcoming lounge at Hotel Wonder Hill Inn" },
  { src: nh5View, alt: "NH-5 winding through the Himalayan forest below the hotel" },
  { src: familyRoom, alt: "Spacious family accommodation with warm wooden finishes" },
  { src: hotelExterior, alt: "Exterior of Hotel Wonder Hill Inn among trees in Narkanda" },
  { src: dining, alt: "Freshly prepared homestyle meal from the in-house kitchen" },
];

export const makeHead = (title: string, description: string, path: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: path }],
});