import MainHeader from './MainHeader';

export default function layout({ children }) {
	return (
		<>
			<MainHeader />
			<main>{children}</main>
		</>
	);
}
