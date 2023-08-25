import React, { useState, useRef, useEffect } from 'react';


function ToolTip({children, selectedButton, id, styles}) {
  const [state, setState] = useState({ visible: false, x: 0, y: 0, type: "none" });

  const tooltipRef = useRef();

  useEffect(() => {
    const tooltip = tooltipRef.current;
    
    if(tooltip){
      tooltip.addEventListener('mouseover', () => {
        setState((prev) => {
          return {...prev, visible: true}
        })
      })
      tooltip.addEventListener('mouseout', () => {
        setState((prev) => {
          return {...prev, visible: false}
        })
      })
    }
    return () => {
      tooltip.removeEventListener('mouseover', () => {})
      tooltip.removeEventListener('mouseout', () => {})
    }
  }, []);

  return (
    <div className='tooltip__container' >
      <div ref={tooltipRef}>{children}</div>
      <div className={`tooltip`} style={{display: (state.visible || selectedButton === id) ? 'block' : 'none'}}>
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner" style={{fontSize: `${styles[id].fontSize? styles[id].fontSize: 16}px`, padding: `${styles[id].padding? styles[id].padding: 3}px`, color: `${styles[id].color}`, backgroundColor: `${styles[id].backgroundColor}`, borderRadius: `${styles[id].borderRadius}px`, width: `${styles[id].tooltipWidth}px`}}>
          {styles[id].text}
        </div>
      </div>
    </div>
  );

}

export default ToolTip;