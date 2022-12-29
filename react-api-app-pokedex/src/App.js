import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from "../src/pages/Header/Header";
import Homepage from "./pages/Home/Homepage";
import Navrout from './service/Navrout';

const App = () => {
  return (
    <Router>
      <Container>
      <Header/>
      <Navrout/>
      </Container>
    </Router>
  );
}

export default App;
