import styled from "styled-components";
import ChoseMoviePage from "./components/ChoseMoviePage";
import ChoseSession from "./components/ChoseSession";

function App() {
  return (
    <>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      {/* <ChoseMoviePage /> */}
      <ChoseSession />
    </>
  );
}

const Header = styled.div`
  width: 100%;
  height: 67px;
  background-color: #C3CFD9;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    color: #E8833A;
  }
`

export default App;