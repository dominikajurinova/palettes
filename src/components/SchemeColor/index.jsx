import React, {palettes} from 'react';
import './style.css';

            

const SchemeColor = (props) => {
    
    return(
        <div className="scheme-color">
            <div style= {{ backgroundColor: props.color }}></div>
            <div>{props.color}</div>
            </div>
    );
       
}

export default SchemeColor;