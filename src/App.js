
import { Fragment ,useState,useEffect} from 'react';
import './App.css';
import Controller from './components/Controller/Controller';
import Pulsing from './components/LoadingPulsing/Pulsing';

// A simple counter app by ACHEAMPONG BERNARDO (SOFTWARE ASSOCIATE)
function App() {

const [over, setOver] = useState(false)

useEffect(() => {
  setTimeout(() => {
    setOver(true)
  }, 5000);
}, [])





let content = over ?  <Controller/> :<Pulsing/> 


  return (
   <Fragment>
 {content}

   </Fragment>
  );
}

export default App;
