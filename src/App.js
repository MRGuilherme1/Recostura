import './App.css';
import Cabeçalho from './Components/Header';
import AreaCostura from './Components/AreaCostura';
import TextoIntrodutivo from './Components/TextoIntrodutivo';
import Rodape from './Components/Footer';
import Slogan from './Components/Slogan';
import Equipe from './Components/Equipe';
{/*import CarouselItem from './Components/Carousel';*/}

function App() {
  return (
    <body>
      <Cabeçalho />
      <AreaCostura />
      {/*<CarouselItem />*/} 
      <TextoIntrodutivo />
      <Slogan />
      <Equipe />
      <Rodape />



    </body>
  );
}

export default App;
