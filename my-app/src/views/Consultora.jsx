import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Inicio } from '../components/Inicio'
// import { Header } from '../components/Header';
import { Toolbar } from '../components/Toolbar/Toolbar'
import Drawer from '../components/SideDrawer/Drawer'
import Backdrop from '../components/Backdrop/Backdrop'
import Notificacion from '../components/Notificacion'


export class Consultora extends Component {
    state = {
        DrawerOpen :false
    };
drawerToggleClickHandler = () => {
    this.setState((prevState)=>{
        return{DrawerOpen :!prevState.DrawerOpen};
    })
};
backdropClickHandler = () => {
  this.setState({DrawerOpen:false});
};

render(){
    let sideDrawer;
    let backdrop;
     if(this.state.DrawerOpen){
sideDrawer = <Drawer />
backdrop =  <Backdrop click={this.backdropClickHandler}/>
     }
    return(
        <div style={{height:'100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
         {sideDrawer}
          {backdrop}
          
          
<main style ={{marginTop:'63px'}}>
<Inicio/>
<Notificacion/>
</main>

        </div>
    )
}
    
    
}