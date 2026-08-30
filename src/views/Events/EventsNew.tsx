import { EventsNewHero } from "./EventsNewHero";
import { EventsCalendar } from "./EventsCalendar";
import { EventsPortfolio } from "./EventsPortfolio";
import { EventGallery } from "./EventGallery";

export function EventsNew() {
  return (
    <div>
      <EventsNewHero />
      <EventsCalendar />
      <EventsPortfolio />
      <EventGallery />
    </div>
  );
}
