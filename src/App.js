import * as React from 'react'
import './App.css';
import ReactDOM from 'react-dom'
import Editor from './components/Editor';
import LivePreview from './components/LivePreview';
import ToolTip from './components/ToolTip';
import './Styles/Editor.css';
import './Styles/LivePreview.css'
import './Styles/ToolTip.css'
import { currentElement } from './components/Editor';

function App() {

  return(

    <div className='flex-container'>
      <Editor />
      <LivePreview />
    </div>
  );
}
// ReactDOM.render(<App />, document.getElementById("app"));

export default App;