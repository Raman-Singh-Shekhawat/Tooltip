import React, { useState } from 'react'
import ToolTip from './ToolTip';

function Editor() {

    const [selectedButton, setSelectedButton] = useState('btnLeft');
    const [textSize, setTextSize] = useState('');
    const [padding, setPadding] = useState('');
    const [textColor, setTextColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleTextChange = (event) => {setSelectedButton(event.target.value);}; 
    const handleTextSize = (event) => {setTextSize(event.target.value);

        document.getElementById(selectedButton).style.fontSize=event.target.value + 'px';
    }; 
    const handleTextColor = (event) => {setTextColor(event.target.value);

        document.getElementById(selectedButton).style.color=event.target.value;
    }; 
    const handleBackgroundColor = (event) => {setBackgroundColor(event.target.value);

        document.getElementById(selectedButton).style.backgroundColor=event.target.value;
    }; 
    const handlePadding = (event) => {setPadding(event.target.value);

        document.getElementById(selectedButton).style.padding=event.target.value + 'px';
    }; 
return (
        <>
    <div className='Container'>
        <div>
            <label for="dropdown">Target Element</label><br/>
            <select id='dropdown' name="dropdown" className="dropdown" onChange={handleTextChange}>
                <option value="btnLeft">Button 1</option>
                <option value="btnRight">Button 2</option>
                <option value="btnCenter">Button 3</option>
                <option value="btnBtmL">Button 4</option>
                <option value="btnBtmR">Button 5</option>   
            </select>
        </div>

        <div>
            <label htmlFor="Tooltip_Text">Tooltip text</label> <br />
            <input type="text" name="" id="ToolTip_Text" placeholder='Input'/>
        </div>

        <div className='TS_P'>
                  
            <div className='Inline'>
                <label htmlFor="Text_Size">Text Size</label> <br />
                <input type="number" name="" id="Text_Size" onChange={handleTextSize}/>
            </div>

            <div className='Inline'>
                <label htmlFor="Padding">Padding</label> <br />
                <input type="number" name="" id="Padding" onChange={handlePadding}/>
            </div>
        </div>


        <div>
            <label htmlFor="Text_Color">Text Colour</label> <br />
            <input type="text" name="" id="Text_Color" placeholder='Input' onChange={handleTextColor}/>
        </div>

        <div>
            <label htmlFor="Background_Color">Background colour</label> <br />
            <input type="text" name="" id="Background_Color" placeholder='Input'onChange={handleBackgroundColor}/>
        </div>

        <div className='C_TW'>
            <div className='Inline'>
                <label htmlFor="Corner_Radius">Corner radius</label> <br />
                <input type="number" name="" id="Corner_Radius"/>
            </div>

            <div className='Inline'>
                <label htmlFor="ToolTip_Width">Tooltip width</label> <br />
                <input type="number" name="" id="ToolTip_Width" />
            </div>
        </div>



        <div className='AW_AH'>

            <div className='Inline'>
                <label htmlFor="Arrow_Width">Arrow width</label> <br />
                <input type="number" name="" id="Arrow_Width" />
            </div>

            <div className='Inline'>
                <label htmlFor="Arrow_Height">Arrow height</label> <br />
                <input type="number" name="" id="Arrow_Height" />
            </div>

        </div>

    </div>
    </>
  )
}

export default Editor
