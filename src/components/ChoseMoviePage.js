import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

export default function ChoseMoviePage() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const promise = axios.get(
			'https://mock-api.driven.com.br/api/v8/cineflex/movies'
		);
		promise.then((res) => setMovie(res.data));
		promise.catch((err) => console.log(err.response.data));
	}, []);

	return (
		<Container>
			<p>Selecione o filme</p>
			<ContainerMovies>
				{movie.map((m) => (
					<MovieCard key={m.id} image={m.posterURL} id={m.id} />
				))}
			</ContainerMovies>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	margin-top: 110px;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		font-family: 'Roboto', sans-serif;
		font-size: 24px;
		color: #293845;
	}
`;

const ContainerMovies = styled.div`
	display: flex;
	margin-top: 35px;
	flex-wrap: wrap;
`;
