import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import './App.css';
import Router from './shared/Router';

const App = () => {
  return(
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;
