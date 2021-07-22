import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Navbar from './navbar/Navbar.js';

// css: // need to choose CSS cant do seperrate
// import './Example/BasicDemo.css'
// import './Example/InstancedVertexColors.css'
// import './Example/MixingHTMLAndWebgl.css'
// import './Example/Viewcube.css'
// import './Example/MixingControls.css'
// import './Example/HTMLannotations.css'
// import './Example/Shadermaterials/Shadermaterials.css'
// import './Example/Simplephysicsdemo.css'
// import './Example/Triggermeshes.css'
// import './Example/Simplephysicsdemowithdebugbounds.css'
// import './Example/ReusingGLTFs/ReusingGLTFs.css'
// import './Example/ReusingGLTFs/try.css'
import './Example/Cloud/Cloud.css'

// # Example here:
import BasicDemo from './Example/BasicDemo'; 
import InstancedVertexColors from './Example/InstancedVertexColors';
import MainPage from './MainPage.js';
import MixingHTMLAndWebgl from './Example/MixingHTMLAndWebgl.js';
import ViewcubeApp from './Example/Viewcube.js';
import MixingControls from './Example/MixingControls.js';
import HTMLannotations from './Example/HTMLannotations.js';
import Shadermaterials from './Example/Shadermaterials/Shadermaterials.js';
import Simplephysicsdemo from './Example/Simplephysicsdemo.js';
import Triggermeshes from './Example/Triggermeshes.js';
import Simplephysicsdemowithdebugbounds from './Example/Simplephysicsdemowithdebugbounds.js';
import ReusingGLTFs from './Example/ReusingGLTFs/ReusingGLTFs.js';
import tryApp from './Example/ReusingGLTFs/try.js';
import CloudApp from './Example/Cloud/Cloud.js';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/BasicDemo" component={BasicDemo} />
        <Route path="/InstancedVertexColors" component={InstancedVertexColors} />
        <Route path="/MixingHTMLAndWebgl" component={MixingHTMLAndWebgl} />
        <Route path="/Viewcube" component={ViewcubeApp} />
        <Route path="/MixingControls" component={MixingControls} />
        <Route path="/HTMLannotations" component={HTMLannotations} />
        <Route path="/Shadermaterials" component={Shadermaterials} />
        <Route path="/Simplephysicsdemo" component={Simplephysicsdemo} />
        <Route path="/Triggermeshes" component={Triggermeshes} />
        <Route path="/Simplephysicsdemowithdebugbounds" component={Simplephysicsdemowithdebugbounds} />
        <Route path="/ReusingGLTFs" component={ReusingGLTFs} />
        <Route path="/tryapp" component={tryApp} />
        <Route path="/clouds" component={CloudApp} />

      </Switch>
    </Router>
  )
};
