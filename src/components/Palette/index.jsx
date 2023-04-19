import React, {palettes} from 'react';
import './style.css';
import SchemeColor from '../SchemeColor';


const Palette = ({ paletteData }) => {
    const { name, image, attribution, colors, direction, description } = paletteData;
    
    return (
        <div className="palette-container">
          <h2>{name}</h2>

          <p>{description}</p>
          <div className= "palette">
            <div className={`palette-scheme palette-scheme--${direction}`}>
            <img className="scheme-image" src={image} alt={name} />
            <p>
            Photo by{' '}
            <a href={attribution.url}>
              {attribution.name}
            </a>{' '}
            on Unsplash
            </p>
              <div className="scheme-colors">
                {colors.map((color) => (
                  <SchemeColor key={color} color={color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Palette;