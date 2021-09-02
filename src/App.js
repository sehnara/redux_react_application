import "./App.css"
import styled from "styled-components"
import WelcomPage from "./pages/WelcomPage"
import { BrowserRouter as Router } from "react-router-dom"

const Whole = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Whole className="App">
      <Router>
        <WelcomPage />
      </Router>
    </Whole>
  )
}

export default App
