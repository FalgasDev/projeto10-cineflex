import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Seats from "./Seats";

export default function ChoseSeat() {
  const [seats, setSeats] = useState([])
  const [chosedMovie, setChosedMovie] = useState([])
  const [date, setDate] = useState([])
  const [hour, setHour] = useState([])
  const {idSessao} = useParams()

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
    promise.then(res => {
      setSeats(res.data.seats)
      setChosedMovie(res.data.movie)
      setDate(res.data.day)
      setHour(res.data)
    })
  }, [])

  return (
    <Container>
      <p>Selecione o(s) assento(s)</p>
      <Seats seats={seats}/>
      <ContainerFooter>
        <img src={chosedMovie.posterURL} alt=""/>
        <div>
          <p>{chosedMovie.title}</p>
          <p>{date.weekday} - {hour.name}</p>
        </div>
      </ContainerFooter>
    </Container>
  )
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
    margin-top: 5px;
  }
`