import * as React from 'react'
import './App.css';
import Editor from './components/Editor';
import LivePreview from './components/LivePreview';
import './Styles/Editor.css';
import './Styles/LivePreview.css'
import './Styles/ToolTip.css'
import { useState } from 'react';

function App() {

  const [selectedButton, setSelectedButton] = useState('btnCenter');
  const [styles, setStyles] = useState({
    btnLeft: {text: '', fontSize: null, padding: null, color: '', backgroundColor: '', borderRadius: null, tooltipWidth: null},
    btnRight: {text: '', fontSize: null, padding: null, color: '', backgroundColor: '', borderRadius: null, tooltipWidth: null},
    btnCenter: {text: '', fontSize: null, padding: null, color: '', backgroundColor: '', borderRadius: null, tooltipWidth: null},
    btnBtmL: {text: '', fontSize: null, padding: null, color: '', backgroundColor: '', borderRadius: null, tooltipWidth: null},
    btnBtmR   : {text: '', fontSize: null, padding: null, color: '', backgroundColor: '', borderRadius: null, tooltipWidth: null},
  })

  return(

    <div className='flex-container'>
      <Editor selectedButton = {selectedButton} setSelectedButton = {setSelectedButton} styles={styles} setStyles={setStyles}/>
      <LivePreview selectedButton = {selectedButton} styles={styles} />
    </div>
  );
}

export default App;