import { EventsHero } from "./EventsHero";
import { EventsCalendar } from "./EventsCalendar";
import { EventsPortfolio } from "./EventsPortfolio";
import { EventGallery } from "./EventGallery";

export function Events() {
  return (
    <div>
      <EventsHero />
      <EventsCalendar />
      <EventsPortfolio />
      <EventGallery />
    </div>
  );
}
