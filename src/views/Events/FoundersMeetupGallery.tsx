import { GalleryImageGrid } from "./EventGalleryCards";

const pictures = [
  { id: 1, src: "/images/galleryFoundersmeetup/foundersmeetupone.jpg" },
  { id: 2, src: "/images/galleryFoundersmeetup/foundersmeetuptwo.jpg" },
  { id: 3, src: "/images/galleryFoundersmeetup/foundersmeetupthree.jpg" },
  { id: 4, src: "/images/galleryFoundersmeetup/foundersmeetupfour.jpg" },
  { id: 5, src: "/images/galleryFoundersmeetup/foundersmeetupfive.jpg" },
  { id: 6, src: "/images/galleryFoundersmeetup/foundersmeetupsix.jpg" },
  { id: 7, src: "/images/galleryFoundersmeetup/foundersmeetupseven.jpg" },
  { id: 8, src: "/images/galleryFoundersmeetup/foundersmeetupeight.jpg" },
  { id: 9, src: "/images/galleryFoundersmeetup/foundersmeetupnine.jpg" },
  { id: 10, src: "/images/galleryFoundersmeetup/foundersmeetupten.jpg" },
  { id: 11, src: "/images/galleryFoundersmeetup/foundersmeetupeleven.jpg" },
  { id: 12, src: "/images/galleryFoundersmeetup/foundersmeetuptwelve.jpg" },
  { id: 13, src: "/images/galleryFoundersmeetup/foundersmeetupthirteen.jpg" },
  { id: 14, src: "/images/galleryFoundersmeetup/foundersmeetupfourteen.jpg" },
  { id: 15, src: "/images/galleryFoundersmeetup/foundersmeetupfifteen.jpg" },
  { id: 16, src: "/images/galleryFoundersmeetup/foundersmeetupsixteen.jpg" },
  { id: 17, src: "/images/galleryFoundersmeetup/foundersmeetupseventeen.jpg" },
  { id: 18, src: "/images/galleryFoundersmeetup/foundersmeetupeighteen.jpg" },
  { id: 19, src: "/images/galleryFoundersmeetup/foundersmeetupnineteen.jpg" },
  { id: 20, src: "/images/galleryFoundersmeetup/foundersmeetuptwenty.jpg" },
  { id: 21, src: "/images/galleryFoundersmeetup/foundersmeetuptwentyone.jpg" },
];

export function FoundersMeetupGalleryPage() {
  return (
    <div>
      <h3 className="pb-2 pt-10 text-center font-heading text-purple">FOUNDERS MEETUP GALLERY</h3>
      <GalleryImageGrid images={pictures} />
    </div>
  );
}
