import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import palettes from './palettes';
import  SchemeColor from './components/SchemeColor';
import Palette from './components/Palette';

const App = () => {
  

  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>       
         <div>
         {palettes.map((palette) => (
          <Palette key={palette.name} paletteData={palette} />
          ))}
        </div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
