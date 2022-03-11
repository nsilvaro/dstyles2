import logo from './logo.svg';
import './App.css';
import {Entity, Scene} from 'aframe-react';
import "aframe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Scene>
        <a-assets>

<a-asset-item 
  id="glbtestmodel"
  src="raw.glb">
</a-asset-item>

</a-assets>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: '#glbtestmodel'}} position="0 1 -2"/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene>
      </header>
    </div>
  );
}
// <a-scene>
// <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
// <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
// <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
// <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
// <a-sky color="#ECECEC"></a-sky>
// <a-assets>

//   <a-asset-item 
//     id="glbtestmodel"
//     src="./items/raw.glb">
//   </a-asset-item>

// </a-assets>

// <a-entity 
//     id="glbtest"
//     gltf-model="#glbtestmodel"
//     position="0 1 -2">
// </a-scene>
export default App;
