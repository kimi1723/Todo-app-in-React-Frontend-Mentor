import classes from './styles.module.css';

import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';

function App() {
	return (
		<div className={classes.root}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
