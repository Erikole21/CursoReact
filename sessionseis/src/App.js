import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header'
import PlanReact from './component/PlanReact';
import PlanRedux from './component/PlanRedux';
import { RUTAS } from './helpers/constants'
import SubtemaHook from './component/SubtemaHook'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route exact path={RUTAS.planReact} component={PlanReact} />
        <Route exact path={`${RUTAS.planReact}/:subtema`} component={SubtemaHook} />
        <Route exact path={RUTAS.planRedux} component={PlanRedux} />
        <Route exact path={`${RUTAS.planRedux}/:subtema`} component={SubtemaHook} />
      </div>
    </BrowserRouter>
  );
}

export default App;
