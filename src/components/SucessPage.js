import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SucessPage({hour, selectedSeats, setSelectedSeats}) {
  const {name, day, movie} = hour
  const navigate = useNavigate()

  return (
    <Container>
      <p>Pedido feito com sucesso!</p>
      <Informations>
        <h1>Filme e sessão</h1>
        <p>{movie.title}</p>
        <p>{day.date} {name}</p>
        <h1>Ingressos</h1>
        {selectedSeats.map(s => <p>Assento {s}</p>)}
        <h1>Comprador</h1>
        <p>Nome: Fábio</p>
        <p>CPF: 333.333.333-33</p>
      </Informations>
      <BackHomeButton onClick={() => {
        navigate('/')
        setSelectedSeats([])
        }}>Voltar pra Home</BackHomeButton>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  > p {
    text-align: center;
    width: 170px;
    font-size: 24px;
    font-weight: 700;
    color: #247A6B;
    line-height: 28px;
    letter-spacing: 0.04em;
  }
`

const Informations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  h1 {
    font-weight: 700;
    font-size: 24px;
    color: #293845;
    margin-left: 29px;
    margin-bottom: 10px;
    margin-top: 25px;
  }
  p {
    margin-left: 29px;
    font-size: 22px;
    color: #293845;
    margin-bottom: 5px;
  }
`

const BackHomeButton = styled.button`
  margin-top: 70px;
  width: 225px;
  height: 42px;
  border: none;
  border-radius: 3px;
  background-color: #E8833A;
  color: #FFFFFF;
  font-size: 18px;
`