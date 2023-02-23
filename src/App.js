import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import './App.css';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();


const App = () => {

  return(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
         <Router />
      </Provider>
    </QueryClientProvider>
  )
}

export default App;
