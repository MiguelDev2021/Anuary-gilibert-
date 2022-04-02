import logo from './logo.svg';
import './App.css';
import {Container} from "react-bootstrap";
import AppRouter from './components/router/router';
import {BrowserRouter} from 'react-router-dom';
import BarraUsuarios from './components/navbar/navbar';
function App() {
  return (
   
    
      
        
        
        
      <div className="App">
      <Container>
        <AppRouter />
      </Container>
    </div>
        
  
    
 
  );
}

export default App;
