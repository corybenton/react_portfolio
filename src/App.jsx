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
          <div className='col-4 project top'>
            <Project i='0' />
            <div className='west topp'>
              <b><u>Description</u></b>
              <p>digital adaptation of Roll Through the Ages boardgame</p>
              <b><u>Skills</u></b>
              <p>HTML, CSS, Javascript, Handlebars, Bootstrap, Express, Mysql</p>
            </div>
          </div>
          <div className='col-4 project top'>
            <Project i='1' />
            <div className='east topp'>
              <b><u>Description</u></b>
              <p>app to find breweries by distance or zip code</p>
              <b><u>Skills</u></b>
              <p>HTML, CSS, Javascript, APIs</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-3 left project middle'>
            <Project i='2' />
            <div className='west topp'>
              <b><u>Description</u></b>
              <p>app that contains a quiz with coding related questions</p>
              <b><u>Skills</u></b> 
              <p>HTML, CSS, Javascript</p>
            </div>
          </div>
          <div className='col-6'>
            <Body />
          </div>
          <div className='col-3 right project middle'>
            <Project i='3' />
            <div className='east topp'>
              <b><u>Description</u></b> 
              <p>command line app to manage ecommerce site</p>
              <b><u>Skills</u></b> 
              <p>Node, Express, Mysql, Javascript</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-4 project'>
            <Project i='4' />
            <div className='west topp'>
              <b><u>Description</u></b>
              <p>note-taking app</p>
              <b><u>Skills</u></b>
              <p>HTML, CSS, Javascript, Express</p>
            </div>
          </div>
          <div className='col-4 project'>
            <Footer />
          </div>
          <div className='col-4 project'>
            <Project i='5' />
            <div className='east topp'>
              <b><u>Description</u></b> 
              <p>app to find 5-day weather in any city</p>
              <b><u>Skills</u></b> 
              <p>HTML, CSS, Javascript</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
