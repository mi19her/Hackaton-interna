import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export class Notificacion extends Component {
  state = {
    visible: true,
  };
  toogle() {
    this.setState({
      visible: !this.state.visible,
    });
  }
}
export default Notificacion;
