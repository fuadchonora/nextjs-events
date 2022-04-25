import { getFeaturedEvents } from '../data/dummy-data';
import EventList from '../components/events/EventList';

export default function Home() {
	const items = getFeaturedEvents();
	return (
		<div>
			<main>
				<h2>Featured Events</h2>
				<EventList items={items}></EventList>
			</main>
		</div>
	);
}
