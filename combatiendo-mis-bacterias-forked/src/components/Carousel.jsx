import { Carousel } from "react-bootstrap";
import React, { Component } from "react";

export default class Carrousel extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cadenaser00.epimg.net/programa/imagenes/2017/06/24/antes_de_que_sea_tarde/1498297784_347379_1498298095_noticia_normal.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3> Aprende y disfruta</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.salud.mapfre.es/media/2020/04/virus-y-bacterias2-1280x720.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Combatiendo mis bacterias</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://image.freepik.com/vector-gratis/bacterias-dibujos-animados-lupa_29190-3665.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3> Bienvenidos</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
