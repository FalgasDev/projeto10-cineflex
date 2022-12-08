import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Sessions from "./Sessions"

export default function ChoseSession() {
  const [session, setSession] = useState([])
  const [movieChosed, setMovieChosed] = useState([])
  const {idFilme} = useParams()

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
    promise.then(res => {
      setSession(res.data.days)
      setMovieChosed(res.data)
    })
  }, [])

  return (
    <Container>
      <p>Selecione o horário</p>
      <ContainerSessions>
        {session.map(s => <Sessions key={s.id} session={s}/>)}
      </ContainerSessions>
      <ContainerFooter data-test="footer">
        <img src={movieChosed.posterURL} alt=""/>
        <p>{movieChosed.title}</p>
      </ContainerFooter>
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

const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 117px;
  background-color: #DFE6ED;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #9EADBA;
  img {
    margin-left: 10px;
    width: 48px;
    height: 72px;
    border: 8px solid #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    color: #293845;
    margin-left: 14px;
  }
`