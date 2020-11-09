import React from "react";

import { Link } from "react-router-dom";

import "../Principal.css";
export default function Principal() {
  return (
    <singg>
      <div className="row row-cols-1 row-cols-md-3 p-5">
        <div className="col mb-4">
          <div className="card">
            <img
              src="https://i.ytimg.com/vi/TBuHqj-S9F4/maxresdefault.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <Link to="/Noticias" type="button" class="btn btn-dark">
                NOTICIAS
              </Link>

              <p className="card-text">
                Encontraras las ultimas noticias sobre como han evoluvionado las
                bacterias, que peligros hay en la tierra con estas, cual es el
                beneficio que nos brindan etc.
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div className="card">
            <img
              src="https://cdn1.downloadpark.mobi/thumbs/2md0h7r20/chlori--bacteria-war-android-game-1.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <Link to="/Juego" type="button" class="btn btn-dark">
                JUEGOS
              </Link>

              <p className="card-text">
                Aqui podras disfrutar de la variedad de juegos que podras
                encontrar y asi mismo disfrutaras cada uno de estos{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img
              src="https://www.naturalezaconderechos.org/wp-content/uploads/2019/08/ni%C3%B1onautas-kiren-miret-bacterias-15042019-482x220.jpg"
              class="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <Link to="/Clasificacion" type="button" class="btn btn-dark">
                CLASIFICACION DE BACTERIAS
              </Link>

              <p className="card-text">
                Aqui aprenderas todo sobre las bacterias que nos rodean que tan
                peligrosas pueden ser, que tan volnerable somos algunas de llas
                y todo lo referente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </singg>
  );
}
