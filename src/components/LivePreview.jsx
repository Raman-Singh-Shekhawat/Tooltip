import ToolTip from './ToolTip'
import React, { useState, useRef } from 'react';

function Btn(props) {
    return (
      <button
        type="button"
        id={props.id}
      >
        {props.text}
      </button>
    );
  }

function LivePreview() {
  
  
    const createBtn = (id, text) => {
      return (
        <ToolTip key={id}>
          <Btn
            id={id}
            text={text}
          />
        </ToolTip>
      );
    };
  
    return (
      <div className='LivePreview_Container'>
        <div className='Mobile_Screen'>
            <div className='b1_2'>       
             {createBtn("btnLeft", "Button 1")}
             {createBtn("btnRight", "Button 2")}
             </div>
             <div className='b3'>        {createBtn("btnCenter", "Button 3")}</div>
             <div className='b4_5'>             {createBtn("btnBtmL", "Button 4")}
            {createBtn("btnBtmR", "Button 5")}</div>
        </div>
      </div>
    );
  
}

export default LivePreview
