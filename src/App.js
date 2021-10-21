import { Provider } from 'react-redux';
import { request } from './api/api';
import './App.css';
import { Pokedex } from './Component/Pokedex';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  )
}

export default App;
