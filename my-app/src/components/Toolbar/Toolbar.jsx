import React from 'react';

 import './toolbar.css';
import DrawerLong from '../SideDrawer/DrawerLong';
 
export const Toolbar = props => {
  return ( 
  <header className="toolbar">
  <nav className="toolbar_navigation">
    <div>
      <DrawerLong click={props.drawerClickHandler}/>
    </div>
    <div className="toolbar_logo"><a href="/"></a></div>
 <div className="spacer"/>
  <div className="toolbar_navigation-items">
  </div>
  </nav>
</header>
)

};
export default Toolbar