import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [hotels, setHotels] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchHotels = async () => {
			try {
				setIsLoading(true);
				setError('');

				const response = await fetch('http://localhost:4000/hotels');

				if (!response.ok) {
					throw new Error('Failed to load hotels');
				}

				const data = await response.json();
				setHotels(data);
			} catch (err) {
				setError(err.message || 'Something went wrong');
			} finally {
				setIsLoading(false);
			}
		};

		fetchHotels();
	}, []);

	return (
		<div className="app">
			<div className="container">
				<h1 className="app__title">Hotel Booking</h1>
				<p className="app__subtitle">Test module: hotels list from json-server</p>

				{isLoading && <p className="app__status">Loading...</p>}

				{error && <p className="app__status app__status_error">{error}</p>}

				{!isLoading && !error && (
					<div className="hotel-list">
						{hotels.map(
							({ id, name, location, rating, priceFrom, image }) => (
								<article className="hotel-card" key={id}>
									<img
										className="hotel-card__image"
										src={image}
										alt={name}
									/>
									<div className="hotel-card__content">
										<h2 className="hotel-card__title">{name}</h2>
										<p className="hotel-card__location">{location}</p>
										<p className="hotel-card__rating">
											Rating: {rating}
										</p>
										<p className="hotel-card__price">
											From ${priceFrom} / night
										</p>
									</div>
								</article>
							),
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
