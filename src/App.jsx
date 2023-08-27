//import { useState } from 'react'
// import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Project from './components/project'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <div className='row'>
      <div className='col-2'></div>
      <div className='col-4 project'>
        <Project i='0' />
      </div>
      <div className='col-4 project'>
        <Project i='1' />
      </div>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
      <div className='col-3 project'>
      <Project i='2' />
      </div>
      <div className='col-6'>
        <Body />
      </div>
      <div className='col-3 project'>
      <Project i='3' />
      </div>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
      <div className='col-4 project'>
      <Project i='4' />
      </div>
      <div className='col-4 project'>
        <Footer />
      </div>
      <div className='col-4 project'>
      <Project i='5' />
      </div>
    </div>
    </div>
    
    </>
  );
}

export default App;
