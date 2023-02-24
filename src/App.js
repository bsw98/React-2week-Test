
// import styles from "./App.module.css"
import React from 'react';
import Product from './component/Products'


class App extends React.Component{
  
  render(){
    // const { name,img,sail } = this.state.data;
    return (
      <>
        <Product name={"노력했습니다 .. "} price={770000} sail={77}/>
      </>
    )
  }
}

export default App;
