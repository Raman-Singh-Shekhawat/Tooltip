import React, { useState, useRef, useEffect } from 'react';


function ToolTip({children}) {
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
      <div className={`tooltip`} style={{display: state.visible ? 'block' : 'none'}}>
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">Tooltip text goes here</div>
      </div>
    </div>
  );

}

export default ToolTip;