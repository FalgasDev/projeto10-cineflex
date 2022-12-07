import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "./Footer"
import Sessions from "./Sessions"

export default function ChoseSession() {
  const [session, setSession] = useState([])

  useEffect(() => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes')
    promise.then(res => setSession(res.data.days))
  }, [])

  return (
    <Container>
      <p>Selecione o horário</p>
      <ContainerSessions>
        {session.map(s => <Sessions session={s}/>)}
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
  margin-top: 12px;
  margin-left: 24px;
  margin-bottom: 137px;
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #293845;
    margin-top: 23px;
  }
`