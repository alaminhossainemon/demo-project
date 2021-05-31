import './App.css';
import Homepage from './Components/Homepage/Homepage/Homepage';

import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
	return (
		<Provider store = {store}>
      <Homepage></Homepage>
    </Provider>
			
		
	);
}

export default App;
