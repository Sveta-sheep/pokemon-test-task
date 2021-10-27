import { Provider } from 'react-redux';
import './App.css';
import { Pokedex } from './Component/Pokedex/Pokedex'; 
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  )
}

export default App;
