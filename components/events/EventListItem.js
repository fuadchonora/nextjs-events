import styles from './EventListItem.module.css';

import Button from '../ui/Button';

export default function EventListItem({ item }) {
	const { id, title, location, date, image } = item;
	const formattedDate = new Date(date).toLocaleDateString('en-US');

	return (
		<li className={styles.item}>
			<img src={image} alt={title} />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
					<div className={styles.date}>
						<time>{formattedDate}</time>
					</div>
					<div className={styles.address}>
						<address>{location}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Button link={`/events/${id}`}>Explore</Button>
				</div>
			</div>
		</li>
	);
}
