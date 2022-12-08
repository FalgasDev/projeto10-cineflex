import styled from "styled-components";

export default function Seats({seats}) {
	return (
		<ContainerSeats>
			{seats.map((s) => (
				<Seat key={s.id} s={s.isAvailable}>{s.name}</Seat>
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
  div{
    display: flex;
    width: 100%;
    justify-content: space-around;
    &:first-child {
      width: 25px;
      height: 25px;
      background-color: #1AAE9E;
      border: 1px solid #0E7D71;
      border-radius: 17px;
    }
    &:nth-child(2) {
      width: 25px;
      height: 25px;
      background-color: #C3CFD9;
      border: 1px solid #7B8B99;
      border-radius: 17px;
    }
    &:nth-child(3) {
      width: 25px;
      height: 25px;
      background-color: #FBE192;
      border: 1px solid #F7C52B;
      border-radius: 17px;
    }
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color: #4E5A65
  }
`

const Seat = styled.button`
  width: 26px;
  height: 26px;
  background-color: ${props => props.s ? '#C3CFD9' : '#FBE192'};
  border: 1px solid ${props => props.s ? '#808F9D' : '#F7C52B'};
  border-radius: 12px;
  margin-bottom: 11px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
`