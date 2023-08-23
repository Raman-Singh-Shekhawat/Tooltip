import * as React from 'react'
import './App.css';
import Editor from './components/Editor';
import LivePreview from './components/LivePreview';
import './Styles/Editor.css';
import './Styles/LivePreview.css'
import './Styles/ToolTip.css'

function App() {

  return(

    <div className='flex-container'>
      <Editor />
      <LivePreview />
    </div>
  );
}

export default App;