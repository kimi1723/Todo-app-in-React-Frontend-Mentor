import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes['footer']}>
			<p className={classes['attribution']}>
				Challenge by&nbsp;
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
					Frontend Mentor
				</a>
				. Coded by&nbsp;
				<a href="https://www.frontendmentor.io/profile/kimi1723" target="_blank" rel="noopener noreferrer">
					Patryk Sąsiadek
				</a>
				.
			</p>
		</footer>
	);
};

export default Footer;
