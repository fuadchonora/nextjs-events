import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/events/EventList';

export default function AllEvents() {
	const items = getAllEvents();
	return (
		<div>
			<main>
				<h2>All Events</h2>
				<EventList items={items}></EventList>
			</main>
		</div>
	);
}
