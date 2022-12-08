import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Sessions({session}) {
  const {showtimes} = session
	const navigate = useNavigate()
	return (
		<>
			<p>{session.weekday} - {session.date}</p>
			<Buttons>
				{showtimes.map(a => <button key={a.id} onClick={() => navigate(`/assentos/${a.id}`)}>{a.name}</button>)}
			</Buttons>
		</>
	);
}

const Buttons = styled.div`
	margin-top: 22px;
	display: flex;
	button {
		font-family: 'Roboto', sans-serif;
		margin-right: 8px;
		width: 83px;
		height: 43px;
		background-color: #e8833a;
		border: none;
		border-radius: 3px;
		color: #ffffff;
		font-size: 18px;
	}
`;
