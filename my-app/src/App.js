import classes from './styles.module.css';

import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import store from './store';

import { Provider } from 'react-redux';

function App() {
	return (
		<div className={classes.root}>
			<Provider store={store}>
				<Header />
				<Main />
				<Footer />
			</Provider>
		</div>
	);
}

export default App;
