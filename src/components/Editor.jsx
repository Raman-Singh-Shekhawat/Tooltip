import React, { useState } from 'react'

function Editor({selectedButton, setSelectedButton, styles, setStyles}) {

    const [padding, setPadding] = useState('');
    const [textColor, setTextColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleBtnChange = (event) => {setSelectedButton(event.target.value);}

    const handleTextChange = (event) => {
        setStyles((prev) => {
            return {
                ...prev,
                [selectedButton]: {
                    ...styles[selectedButton],
                    text: event.target.value
                }
            }
        })
    }

    const handleTextSize = (event) => {
        setStyles((prev) => {
            return {
                ...prev,
                [selectedButton]: {
                    ...styles[selectedButton],
                    fontSize: event.target.valueAsNumber
                }
            }
        })
    }; 
    const handleTextColor = (event) => {
        setStyles((prev) => {
            return {
                ...prev,
                [selectedButton]: {
                    ...styles[selectedButton],
                    color: event.target.value
                }
            }
        }) 
    }; 
    const handleBackgroundColor = (event) => {
        setStyles((prev) => {
            return {
                ...prev,
                [selectedButton]: {
                    ...styles[selectedButton],
                    backgroundColor: event.target.value
                }
            }
        })
    }; 
    const handlePadding = (event) => {
        setStyles((prev) => {
            return {
                ...prev,
                [selectedButton]: {
                    ...styles[selectedButton],
                    padding: event.target.valueAsNumber
                }
            }
        })
    }; 
    const handleBorderRadius = (event) => {

        setStyles((prev) => {
            return {
                ...prev,
                [selectedButton]: {
                    ...styles[selectedButton],
                    borderRadius: event.target.valueAsNumber
                }
            }
        })
    };

    const handleTooltipWidth = (event) => {

        setStyles((prev) => {
            return {
                ...prev,
                [selectedButton]: {
                    ...styles[selectedButton],
                    tooltipWidth: event.target.valueAsNumber
                }
            }
        })
    };

return (
        <>
    <div className='Container'>
        <div>
            <label for="dropdown">Target Element</label><br/>
            <select id='dropdown' defaultValue={'btnCenter'} name="dropdown" className="dropdown" onChange={handleBtnChange}>
                <option value="btnLeft">Button 1</option>
                <option value="btnRight">Button 2</option>
                <option value="btnCenter">Button 3</option>
                <option value="btnBtmL">Button 4</option>
                <option value="btnBtmR">Button 5</option>   
            </select>
        </div>

        <div>
            <label htmlFor="Tooltip_Text">Tooltip text</label> <br />
            <input type="text" name="" id="ToolTip_Text" placeholder='Input' value={styles[selectedButton].text} onChange={handleTextChange} />
        </div>

        <div className='TS_P'>
                  
            <div className='Inline'>
                <label htmlFor="Text_Size">Text Size</label> <br />
                <input type="number" name="" id="Text_Size" value={styles[selectedButton].fontSize} onChange={handleTextSize}/>
            </div>

            <div className='Inline'>
                <label htmlFor="Padding">Padding</label> <br />
                <input type="number" name="" id="Padding" onChange={handlePadding} value={styles[selectedButton].padding}/>
            </div>
        </div>


        <div>
            <label htmlFor="Text_Color">Text Colour</label> <br />
            <input type="text" name="" id="Text_Color" placeholder='Input' value={styles[selectedButton].color} onChange={handleTextColor}/>
        </div>

        <div>
            <label htmlFor="Background_Color">Background colour</label> <br />
            <input type="text" name="" id="Background_Color" placeholder='Input' value={styles[selectedButton].backgroundColor} onChange={handleBackgroundColor}/>
        </div>

        <div className='C_TW'>
            <div className='Inline'>
                <label htmlFor="Corner_Radius">Corner radius</label> <br />
                <input type="number" name="" id="Corner_Radius" value = {styles[selectedButton].borderRadius} onChange={handleBorderRadius} />
            </div>

            <div className='Inline'>
                <label htmlFor="ToolTip_Width">Tooltip width</label> <br />
                <input type="number" name="" id="ToolTip_Width" value = {styles[selectedButton].tooltipWidth} onChange={handleTooltipWidth}/>
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
