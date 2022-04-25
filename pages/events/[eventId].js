import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getEventById } from '../../data/dummy-data';

import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';

export default function EventDetail() {
	const router = useRouter();
	const { eventId } = router.query;

	const [item, setItem] = useState(null);

	useEffect(() => {
		if (eventId) setItem(getEventById(eventId));
		console.log(eventId, getEventById(eventId));
	}, [eventId]);

	return (
		<>
			{item && (
				<>
					<EventSummary title={item.title}></EventSummary>
					<EventLogistics
						date={item.date}
						address={item.location}
						image={item.image}
						imageAlt={item.title}
					></EventLogistics>
					<EventContent>
						<p>{item.description}</p>
					</EventContent>
				</>
			)}
		</>
	);
}
