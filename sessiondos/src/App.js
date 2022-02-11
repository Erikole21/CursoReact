import logo from './logo.svg';
import './App.css';
import Heroe from './components/Herobox'
import ironManImage from './assets/ironMan.jpg'
import thanos from './assets/Thanos.jpg'
import thorImage from './assets/thor.jpg'
import developerImage from './assets/programador.jpg'
import Villano from './components/AntiHeroeBox'
import CicloDeVida from './SessionTres/statate'
import Contador from './SessionTres/contador'
import ContadorHooks from './SessionCuatro/Hooks/Contador'
import FormularioEscuela from './SessionCuatro/Formulario/Form'
import FormularioLista from './SessionCinco/FormListClass'
import FormularioListCHF from './SessionCinco/FormListCFH'
import RenderizadoCondicional from './SessionSeis/index'

const App = () => {
  return (
    <div className="App">
      <RenderizadoCondicional/>
      {/* <FormularioListCHF/> */}
      {/* <FormularioLista/> */}
      {/* <CicloDeVida></CicloDeVida>
      <Contador></Contador>
      <ContadorHooks></ContadorHooks> */}
      {/* <FormularioEscuela></FormularioEscuela> */}
      {/* <Heroe name="Erik" heroName="Iron Man" className="Hero-ironMan"
      imagen={ironManImage} link="https://es.wikipedia.org/wiki/Iron_Man" textlink="Iron Man" >
        <p>
          aadfasdasda asfdasdasd adfasdasda asdasdasd asdasdasd
          asdadsa asdasdas asdasdsa asdasd
        </p>
      </Heroe>
      <Heroe name="Manolo" heroName="Thor" imagen={thorImage} className="Hero-thor"
      link="https://es.wikipedia.org/wiki/Thor" textlink="Thor"/>
      <Heroe name="Erik" heroName="Programador" imagen={developerImage} 
      link="https://es.wikipedia.org/wiki/Programador" textlink="Programador" className="Hero-programador"/> */}
      {/* <Villano name="Thanos" heroName="Thanos" className="Hero-ironMan"
        imagen={thanos} link="https://es.wikipedia.org/wiki/Thanos" textlink="Thanos" >
        <p>
        Thanos es un megavillano ficticio que aparece en los cómics estadounidenses publicados por Marvel 
        Comics. Creado por el escritor y artista Jim Starlin, el personaje apareció por primera vez en 
        The Invincible Iron Man # 55 (febrero de 1973). Su nombre es en parte un juego de 
        palabras que hace referencia al término griego Θάνατος (Thánatos), 
        que significa muerte, pero principalmente es una deformación del nombre del dios de la muerte 
        no violenta, Tánatos. Él es el hijo de Mentor y el hermano de Starfox. 
        </p>
       </Villano> */}

    </div>
  );
}

export default App;
