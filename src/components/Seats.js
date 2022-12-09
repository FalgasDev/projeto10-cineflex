import styled from 'styled-components';

export default function Seats({ seats, selectedSeatsId, setSelectedSeatsId, selectedSeats, setSelectedSeats }) {
	function selectSeat(req) {
		if (!selectedSeats.some((props) => props === req.name)) {
			const newSelected = [...selectedSeats, req.name];
			const newIds = [...selectedSeatsId, req.id];
			setSelectedSeats(newSelected);
			setSelectedSeatsId(newIds);
		} else {
			const removeSelect = selectedSeats.filter(props => props !== req.name)
			const removeSelectId = selectedSeatsId.filter(props => props !== req.id)
			setSelectedSeats(removeSelect)
			setSelectedSeatsId(removeSelectId)
		}
	}

	return (
		<ContainerSeats>
			{seats.map((s) => (
				<Seat
					data-test="seat"
					onClick={
						s.isAvailable
							? () => selectSeat(s)
							: () => alert('Esse assento não está disponível')
					}
					key={s.id}
					name={s.name}
					selectedSeats={selectedSeats}
					s={s.isAvailable}
				>
					{s.name}
				</Seat>
			))}
			<div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div>
				<p>Selecionado</p>
				<p>Disponível</p>
				<p>Indisponível</p>
			</div>
		</ContainerSeats>
	);
}

const ContainerSeats = styled.div`
	display: flex;
	width: 327px;
	flex-wrap: wrap;
	margin-top: 25px;
	gap: 7px;
	margin-left: 10px;
	div {
		display: flex;
		width: 100%;
		justify-content: space-around;
		&:first-child {
			width: 25px;
			height: 25px;
			background-color: #1aae9e;
			border: 1px solid #0e7d71;
			border-radius: 17px;
		}
		&:nth-child(2) {
			width: 25px;
			height: 25px;
			background-color: #c3cfd9;
			border: 1px solid #7b8b99;
			border-radius: 17px;
		}
		&:nth-child(3) {
			width: 25px;
			height: 25px;
			background-color: #fbe192;
			border: 1px solid #f7c52b;
			border-radius: 17px;
		}
	}
	p {
		font-family: 'Roboto', sans-serif;
		font-size: 13px;
		color: #4e5a65;
	}
`;

const Seat = styled.button`
	width: 26px;
	height: 26px;
	background-color: ${(props) =>
		props.selectedSeats.includes(props.name)
			? '#1AAE9E'
			: props.s
			? '#C3CFD9'
			: '#FBE192'};
	border: 1px solid
		${(props) =>
			props.selectedSeats.includes(props.name)
				? '#0E7D71'
				: props.s
				? '#808F9D'
				: '#F7C52B'};
	border-radius: 12px;
	margin-bottom: 11px;
	font-family: 'Roboto', sans-serif;
	font-size: 11px;
`;
