import { type ChangeEvent, type ReactElement, useState } from 'react';
import EventCard from '~/components/event-card';
import { query } from '~/server/graphql';
import type { EventRecord } from '~/types';

export async function getStaticProps(): Promise<{
	props: { events: EventRecord[] };
}> {
	const q = `
    events:allEvents(sortField: "date", sortOrder: "desc") {
      id
      name
      description
      talk
      date
      links
      tags
    }`;

	const { events } = await query(q);

	return {
		props: {
			events,
		},
	};
}

export default function EventsPage({
	events,
}: { events: EventRecord[] }): ReactElement {
	const [filteredEvents, setFilteredEvents] = useState(events);

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const filter = event.target.value.toLocaleLowerCase();

		const filterLogic = (e: EventRecord): boolean => {
			return (
				e.name.toLocaleLowerCase().includes(filter) ||
				e.talk.toLocaleLowerCase().includes(filter) ||
				!!e.tags.find((t) => t.includes(filter))
			);
		};

		setFilteredEvents(filter ? events.filter(filterLogic) : events);
	};

	return (
		<div>
			<p>Disclaimer: still working to find the best way to represent it</p>
			<input
				type="text"
				placeholder="Filter here"
				className="input input-bordered w-full"
				onChange={handleChange}
			/>
			<div className="w-auto grid grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
				{filteredEvents.map((e) => (
					<EventCard key={e.id} event={e} />
				))}
			</div>
		</div>
	);
}
