//import { useState } from 'react'
// import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <div className='row'>
      <div className='col project'>
        <p>Placeholder</p>
      </div>
      <div className='col project'>
        <p>Placeholder</p>
      </div>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
      <div className='col-3 project'>
        <p>Placeholder</p>
      </div>
      <div className='col-6'>
        <Body />
      </div>
      <div className='col-3 project'>
        <p>Placeholder</p>
      </div>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
      <div className='col project'>
        <p>Placeholder</p>
      </div>
      <div className='col project'>
        <Footer />
      </div>
      <div className='col project'>
        <p>Placeholder</p>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default App;
