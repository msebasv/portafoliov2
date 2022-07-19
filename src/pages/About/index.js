import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import avatar from "../../assets/images/avatar.png";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import music from "../../assets/images/music.png";
import "./index.scss";

const About = () => {
  return (
    <div className="container-about">
      <Container fluid="md" className="container-grid-about">
        <h3 className="title-about">About</h3>
        <Row>
          <Col>
            <img src={avatar} className="picture-avatar" alt="Avatar" />
          </Col>
          <Col>
            <h2>HOLA,</h2>
            <h3>Soy desarrollador web front-end</h3>
            <p>
              Desarrollador web front-end y estudiante de Ingeniería de sistemas
              con conocimiento en desarrollo de software bajo los lenguajes de
              programación Java, JavaScript, desarrollo frontend con React JS,
              lenguaje de marcado HTML y lenguaje de estilos CSS.
            </p>
            <span className="line" />
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-logos">
                <img src={html} className="html" alt="html" />
                <img src={css} className="css" alt="css" />
                <img src={javascript} className="javascript" alt="javascript" />
                <img src={react} className="react" alt="react" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="title-hobbies">Hobbies</h1>
            <p>
              Disfruto de los deportes, de todo tipo de actividad física, además
              de que me ejercito constantemente para buscar un buen estado
              físico, me encanta la música, todo el tiempo estoy escuchando
              música de todo género, aunque si pudiera escoger un género en
              específico, sería el reggae.
              <br />
              <br />
              Me gusta los videojuegos, uno de mis juegos favoritos es el League
              of Legends (lol), aunque a veces puede ser un juego estresante por
              la competitividad, me divierto jugando y aún más si es con amigos.
            </p>
          </Col>
          <Col>
            <img src={music} className="picture-music" alt="music" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
