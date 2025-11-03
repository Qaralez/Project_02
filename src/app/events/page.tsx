import { db } from "@/db";
import { events as eventsTable } from "@/db/schema";

const EventsPage = async ({}) => {
  const events = await db.select().from(eventsTable);
  return (
    <div>
      <section>
        <h2>Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default EventsPage;