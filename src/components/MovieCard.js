import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ image, id }) {
	const navigate = useNavigate();

	return (
		<CardMovie data-test="movie" onClick={() => navigate(`/sessoes/${id}`)}>
			<img src={image} alt="" />
		</CardMovie>
	);
}

const CardMovie = styled.button`
	width: 145px;
	height: 209px;
	background-color: #ffffff;
	margin-left: 30px;
	margin-bottom: 11px;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	border: none;
	border-radius: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	img {
		width: 129px;
		height: 193px;
	}
`;
