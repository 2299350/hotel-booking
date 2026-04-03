import { Layout } from './components';
import { HotelsList } from './pages';
import './App.css';

function App() {
	return (
		<div className="app">
			<Layout>
				<HotelsList />
			</Layout>
		</div>
	);
}

export default App;
