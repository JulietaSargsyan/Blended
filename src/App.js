import './App.css';
import Button from './components/Button';
import menWorking from './img/menWorking.png';
import notes from './img/notes.png';
import books from './img/books.png';
import colors from './img/colors.png';
import get from './img/get.png';
import eyes from './img/eyes.png';
import league from './img/league.png';
import pixels from './img/pixels.png';
import spoon from './img/spoon.png';
import cube from './img/cube.png';
import { BrowserRouter as Router,
         Switch,
         Route,
         Link 
        } from 'react-router-dom';
import ScheduleCall from './components/ScheduleCall';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='welcome'>
          <p className='p-25p'>welcome to</p>
          <h1 className='big-shrift'>blended design room</h1>
          <Button children='view portfolio' marginTop='100px' />
        </div>
        <div className='youngAndBold'>
          <div className='left-side'>
            <p className='p-32'>we're creative rebels driving<br/>brands to the</p>
            <h2 className='big-shrift' >young & bold</h2>
            <p>Are you keeping up?</p>
              <Button children='schedule a call' marginTop='100px' />
          </div>
          <div className='right-side'>
            <img src={menWorking} />
          </div>
        </div>
        <div className='works-gallery'>
          <div className='text-description'>
            <p>We will help you to</p>
            <h2 className='big-shrift' style={{fontSize:72+'px'}}>build your brand</h2>
          </div>
          <div className='pics-container'>
            <div className='pics'>
              <a href='#'>
                <img src={notes} />
              </a>
              <a href='#'>
                <img src={books} />
              </a>
              <a href='#'>
                <img src={eyes} />
              </a>
              <a href='#'>
                <img src={spoon} />
              </a>
              <a href='#'>
                <img src={colors} />
              </a>
              <a href='#'>
                <img src={pixels} />
              </a>
              <a href='#'>
                <img src={get} />
              </a>
              <a href='#'>
                <img src={league} />
              </a>
            </div>
            <Button children='more works here' marginTop='38px' />
          </div>
        </div>
        <div className='whatWeDo'>
            <h2 className='big-shrift'>what<br/>we do</h2>
            <div className='lists'>
              <ul>
                <li>Welcome to</li>
                <li>Welcome to</li>
                <li>Welcome to</li>
                <li>Welcome to</li>
              </ul>
              <ul>
                <li>Welcome to</li>
                <li>Welcome to</li>
                <li>Welcome to</li>
                <li>Welcome to</li>
              </ul>
            </div>
        </div>
        <img className='cube-img' src={cube} />
      </main>
      <footer>
        <p>&copy; 2021 All rights reserved. blended design room. </p>
        <div className='social'>
          <a href='https://www.facebook.com/Lusin-Sargsyan-1650736658473780'>Facebook</a>
          <a href='https://www.linkedin.com/feed/'>Linked In</a>
        </div>
       

      </footer>
      <div className='stiky-line'></div>
    </>
  );
}

export default App;
