import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ChoseMoviePage from './components/ChoseMoviePage';
import ChoseSeat from './components/ChoseSeat';
import ChoseSession from './components/ChoseSession';
import SucessPage from './components/SucessPage';

function App() {
	const [hour, setHour] = useState([]);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [inputName, setInputName] = useState('');
	const [inputCPF, setInputCPF] = useState('');

	return (
		<BrowserRouter>
			<Header>
				<h1>CINEFLEX</h1>
			</Header>
			<Routes>
				<Route path="/" element={<ChoseMoviePage />} />
				<Route path="/sessoes/:idFilme" element={<ChoseSession />} />
				<Route
					path="/assentos/:idSessao"
					element={
						<ChoseSeat
							hour={hour}
							setHour={setHour}
							selectedSeats={selectedSeats}
							setSelectedSeats={setSelectedSeats}
							inputName={inputName}
							setInputName={setInputName}
							inputCPF={inputCPF}
							setInputCPF={setInputCPF}
						/>
					}
				/>
				<Route
					path="/sucesso"
					element={
						<SucessPage
							hour={hour}
							selectedSeats={selectedSeats}
							setSelectedSeats={setSelectedSeats}
							inputName={inputName}
							setInputName={setInputName}
							inputCPF={inputCPF}
							setInputCPF={setInputCPF}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

const Header = styled.div`
	width: 100%;
	height: 67px;
	background-color: #c3cfd9;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-family: 'Roboto', sans-serif;
		font-size: 34px;
		color: #e8833a;
	}
`;

export default App;
