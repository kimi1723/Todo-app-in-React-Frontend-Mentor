import classes from './styles.module.css';

import store from './store/index';
import { Provider } from 'react-redux';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';

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
