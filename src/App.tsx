import { Provider } from 'react-redux';
import Routes from './Routes/Routes';
import { store } from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
