// import React from 'react'
import ToolTip from './ToolTip'
import React, { useState, useRef } from 'react';

function Btn(props) {
    return (
      <button
        type="button"
        id={props.id}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseOut}
      >
        {props.text}
      </button>
    );
  }

function LivePreview() {

    const toolTipRef = useRef();

    const handleOnMouseOut = () => {
      // toolTipRef.current.hide();
    };
  
    const handleOnMouseOver = (evt) => {
      const el = evt.currentTarget;
  
      if (el != null) {
        const rect = el.getBoundingClientRect();
      //   toolTipRef.current.show(rect);
      }
    };
  
    const createBtn = (id, text) => {
      return (
        <Btn
          id={id}
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
          text={text}
        />
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
        <ToolTip ref={toolTipRef} />
        </div>
      </div>
    );

  return (

    <div className='LivePreview_Container'>
        <ToolTip />
    </div>
  ) 
  
}

export default LivePreview
