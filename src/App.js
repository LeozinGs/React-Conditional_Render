
import { useState } from 'react';
import './App.css';
import Ilha from "./assets/ilha.jpg"
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {
  const [userName] = useState("Leozinho");

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      
      {/* Imagem em public */}
      <div>
        <img src="/imagem.jpg" alt="Leão" />
      </div>

      {/* Imagem em asset */}
      <div>
        <img src={Ilha} alt="Ilha" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* Desafio de UserDetails */}
      <UserDetails/>
    </div>
  );
}

export default App;
