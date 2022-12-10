import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Seats from './Seats';

export default function ChoseSeat({
	hour,
	setHour,
	selectedSeats,
	setSelectedSeats,
	inputName,
	setInputName,
	inputCPF,
	setInputCPF,
}) {
	const [seats, setSeats] = useState([]);
	const [chosedMovie, setChosedMovie] = useState([]);
	const [date, setDate] = useState([]);
	const [selectedSeatsId, setSelectedSeatsId] = useState([]);
	const { idSessao } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const promise = axios.get(
			`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
		);
		promise.then((res) => {
			setSeats(res.data.seats);
			setChosedMovie(res.data.movie);
			setDate(res.data.day);
			setHour(res.data);
		});
	}, []);

	function reserveSeats(e) {
		e.preventDefault();

		if (selectedSeats.length === 0) {
			alert('Você precisa selecionar pelo menos 1 assento');
		} else {
			axios
				.post(
					'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many',
					{
						ids: selectedSeatsId,
						name: inputName,
						cpf: inputCPF,
					}
				)
				.then(navigate('/sucesso'))
				.catch((err) => console.log(err.response.data));
		}
	}

	return (
		<Container>
			<p>Selecione o(s) assento(s)</p>
			<Seats
				seats={seats}
				selectedSeatsId={selectedSeatsId}
				selectedSeats={selectedSeats}
				setSelectedSeats={setSelectedSeats}
				setSelectedSeatsId={setSelectedSeatsId}
			/>
			<FormInformation onSubmit={reserveSeats}>
				<p>Nome do comprador:</p>
				<input
					data-test="client-name"
					type="text"
					value={inputName}
					onChange={(e) => setInputName(e.target.value)}
					placeholder="Digite seu nome..."
					required
				/>
				<p>CPF do comprador:</p>
				<input
					data-test="client-cpf"
					type="text"
					value={inputCPF}
					onChange={(e) => setInputCPF(e.target.value)}
					placeholder="Digite seu CPF..."
					required
				/>
				<div>
					<ReserveSeatsButton data-test="book-seat-btn" type="submit">
						Reservar assento(s)
					</ReserveSeatsButton>
				</div>
			</FormInformation>
			<ContainerFooter data-test="footer">
				<img src={chosedMovie.posterURL} alt="" />
				<div>
					<p>{chosedMovie.title}</p>
					<p>
						{date.weekday} - {hour.name}
					</p>
				</div>
			</ContainerFooter>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	margin-top: 110px;
	display: flex;
	flex-direction: column;
	align-items: center;
	> p {
		font-family: 'Roboto', sans-serif;
		font-size: 24px;
		color: #293845;
	}
`;

const ContainerFooter = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 117px;
	background-color: #dfe6ed;
	position: fixed;
	bottom: 0;
	left: 0;
	border-top: 1px solid #9eadba;
	img {
		margin-left: 10px;
		width: 48px;
		height: 72px;
		border: 8px solid #ffffff;
		border-radius: 3px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	}
	p {
		font-family: 'Roboto', sans-serif;
		font-size: 26px;
		color: #293845;
		margin-left: 14px;
		margin-top: 5px;
	}
`;

const ReserveSeatsButton = styled.button`
	margin-top: 50px;
	margin-bottom: 137px;
	width: 225px;
	height: 42px;
	border: none;
	border-radius: 3px;
	background-color: #e8833a;
	color: #ffffff;
	font-size: 18px;
	cursor: pointer;
`;

const FormInformation = styled.form`
	margin-top: 33px;
	width: 327px;
	display: flex;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
	p {
		font-size: 18px;
		color: #293845;
		margin-top: 12px;
	}
	input {
		height: 51px;
		border: 1px solid #d5d5d5;
		border-radius: 3px;
		padding-left: 18px;
		font-size: 18px;
		&::placeholder {
			font-style: italic;
			color: #afafaf;
		}
	}
	div {
		display: flex;
		justify-content: center;
	}
`;
