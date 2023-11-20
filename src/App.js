import './App.css';
import { register } from 'swiper/element/bundle'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import AreaCostura from './Components/AreaCostura';
import TextoIntrodutivo from './Components/TextoIntrodutivo';
import AreaDoacao from './Components/AreaDoacao';
import Carousel from './Components/Carousel';
register();
function App() {
  return (
    <body>
      <AreaCostura />
      <TextoIntrodutivo />
      <Carousel />
      <AreaDoacao />



    </body>
  );
}

export default App;
