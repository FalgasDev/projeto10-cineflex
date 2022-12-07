import styled from "styled-components"
import Footer from "./Footer"

export default function ChoseSession() {
  return (
    <Container>
      <p>Selecione o horário</p>
      <ContainerSessions>
        <p>Quinta-feira - 24/06/2021</p>
        <Buttons>
          <button>15:00</button>
          <button>19:00</button>
        </Buttons>
      </ContainerSessions>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #293845;
    text-align: center;
  }
`

const ContainerSessions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-left: 24px;
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #293845;
  }
`

const Buttons = styled.div`
  margin-top: 22px;
  display: flex;
  button {
    font-family: 'Roboto', sans-serif;
    margin-right: 8px;
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 18px;
  }
`