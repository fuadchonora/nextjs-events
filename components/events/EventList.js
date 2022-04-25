import EventListItem from './EventListItem';
import styles from './EventList.module.css';

export default function EventList({ items }) {
	return (
		<ul className={styles.EventList}>
			{items.map((item) => (
				<EventListItem key={item.id} item={item}></EventListItem>
			))}
		</ul>
	);
}
