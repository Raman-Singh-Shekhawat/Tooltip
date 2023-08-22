import React from 'react'

function Editor() {
  return (
    <>
    <div className='Container'>

        <div>
            <label for="dropdown">Target Element</label><br/>
            <select name="dropdown" className="dropdown">
                <option value="button1">Button 1</option>
                <option value="button2">Button 2</option>
                <option value="button3">Button 3</option>
                <option value="button4">Button 4</option>
                <option value="button5">Button 5</option>   
            </select>
        </div>

        <div className='TS_P'>
                  
            <div className='Inline'>
                <label htmlFor="Text_Size">Text Size</label> <br />
                <input type="text" name="" id="Text_Size" />
            </div>

            <div className='Inline'>
                <label htmlFor="Padding">Padding</label> <br />
                <input type="text" name="" id="Padding" />
            </div>
        </div>


        <div>
            <label htmlFor="Text_Color">Text Colour</label> <br />
            <input type="text" name="" id="Text_Color" placeholder='Input' />
        </div>

        <div>
            <label htmlFor="Background_Color">Background colour</label> <br />
            <input type="text" name="" id="Background_Color" placeholder='Input'/>
        </div>

        <div className='C_TW'>
            <div className='Inline'>
                <label htmlFor="Corner_Radius">Corner radius</label> <br />
                <input type="text" name="" id="Corner_Radius" />
            </div>

            <div className='Inline'>
                <label htmlFor="ToolTip_Width">Tooltip width</label> <br />
                <input type="text" name="" id="ToolTip_Width" />
            </div>
        </div>



        <div className='AW_AH'>

            <div className='Inline'>
                <label htmlFor="Arrow_Width">Arrow width</label> <br />
                <input type="text" name="" id="Arrow_Width" />
            </div>

            <div className='Inline'>
                <label htmlFor="Arrow_Height">Arrow height</label> <br />
                <input type="text" name="" id="Arrow_Height" />
            </div>

        </div>

    </div>
    </>
  )
}

export default Editor