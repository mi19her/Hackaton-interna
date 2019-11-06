import React, { Component } from "react";
import { Toolbar } from "../components/Toolbar/Toolbar";
import Drawer from "../components/SideDrawer/Drawer";
import Backdrop from "../components/Backdrop/Backdrop";
import { Inicio } from "../components/Inicio";
import { RedesSociales } from "../components/RedesSociales";
import { LinkCatalogo } from "../components/LinkCatalogo";
import { Premios } from "../components/Premios";

export class Consultora extends Component {
  // const [mostrar, setMostrar] = useState(false)
//   constructor(props) {
//     super(props);
//     this.state = { mostrar: false };
//   }
  state = {
    DrawerOpen: false,
    mostrar: false,
  };
  setMostrar = () => {
    this.setState({ mostrar: true });
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { DrawerOpen: !prevState.DrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ DrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.DrawerOpen) {
      sideDrawer = <Drawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}

        <main style={{ marginTop: "63px" }}>
          <div className="flex">
            <Inicio
              click={() => {
                this.setMostrar(true);
              }}
            />
            {this.state.mostrar === true ? <RedesSociales /> : null}
            <h5>GANA MÁS</h5>
            <LinkCatalogo />
            <h5>PREMIOS DEL MES</h5>
            <Premios />
          </div>
        </main>
      </div>
    );
  }
}
