import "./App.css";
import Header from './Components/Router';
import { view } from 'react-easy-state';
require('dotenv').config();

export default view(() => {
  return (
    <div className="App">
          <Header/>
    </div>
  );
});

