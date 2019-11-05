import React from 'react';
import '../css/main.css'
import { Button, Form, FormGroup, Col, Image } from 'react-bootstrap';
import belcorpLogo from '../img/belcorpLogo.png'
export const Login = () => {
    return (

        <div className="log">

            <Form className="login-form">
                <div className="container">
                    <Col md={4}>
                        <Image src={belcorpLogo} rounded />
                    </Col>
                </div>
                <h5><span className="text-center"> ¡Bienvenida a la Compañía de Belleza donde puedes ganar más! </span></h5>
                <FormGroup>
                    <input className="inputs" type="text" placeholder="Código" />
                </FormGroup>
                <FormGroup>
                    <input className="inputs" type="password" placeholder="Contraseña"
                    />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Ingresar</Button>
            </Form>

        </div>
    )
}