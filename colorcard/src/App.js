import logo from './logo.svg';
import './App.css';
import Colorcard from './Colorcomponent/Color'; 

import Card from './Colorcomponent/Card'


function App() {
  return (
    <div className="App">
      <div style={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap",
        margin:"20px"
      }}>
      <Colorcard colorcode="#FF6663" colorName="PINK"/>
      <Colorcard  colorcode="#333333" colorName="GRAY"/>
      <Colorcard colorcode="#000000" colorName="BLACK"/>
      <Colorcard colorcode="#C90B0B" colorName="RED"/>
      <Colorcard colorcode="#FF6663" colorName="PINK"/>
      </div>
      
      <div style={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap",
        margin:"20px"
      }}>
      <Colorcard colorcode="#FF8000" colorName="ORANGE"/>
      <Colorcard  colorcode="#FFF500" colorName="YELLOW"/>
      <Colorcard colorcode="#CCCCCC" colorName="LIGHT GRAY"/>
      <Colorcard colorcode="#7E41A2" colorName="PURPLE"/>
      <Colorcard colorcode="#C14911" colorName="BROWN"/>
      
      </div>
      <div/>


      <Card/>
      

      


    </div>
  );
}

export default App;
