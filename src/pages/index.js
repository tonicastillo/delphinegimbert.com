import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerImg from "../images/banner.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Delphine Gimbert / Diseño Gráfico" />
    <div>
      <div>
        <ul className="pb-8">
          <li className="inline-block mr-2">
            <a
              href="https://cuartoderecha.com/es/proyecto/lecturasenflor2017"
              target="_blank"
              style={{
                backgroundImage:
                  "url(https://cuartoderecha.com/proyectos/lecturasenflor2017/thumb.jpg)",
              }}
              rel="noreferrer"
              className="block w-28 h-12 bg-cover bg-center"
            >
              <h3 className="hidden">Lecturas en flor</h3>
            </a>
          </li>
          <li className="inline-block mr-2">
            <a
              href="https://cuartoderecha.com/es/proyecto/losquetecuidan"
              target="_blank"
              style={{
                backgroundImage:
                  "url(https://cuartoderecha.com/proyectos/losquetecuidan/thumb.gif)",
              }}
              rel="noreferrer"
              className="block w-40 h-12 bg-cover bg-center"
            >
              <h3 className="hidden">Los que te cuidan son invisibles</h3>
            </a>
          </li>
          <li className="inline-block mr-2">
            <a
              href="https://cuartoderecha.com/es/proyecto/atomo"
              target="_blank"
              style={{
                backgroundImage:
                  "url(https://cuartoderecha.com/proyectos/atomo/thumb.jpg)",
              }}
              rel="noreferrer"
              className="block w-16 h-12 bg-cover bg-center"
            >
              <h3 className="hidden">Juegos de mesa Átomo</h3>
            </a>
          </li>
          <li className="inline-block mr-2">
            <a
              href="https://cuartoderecha.com/es/proyecto/ob"
              target="_blank"
              style={{
                backgroundImage:
                  "url(https://cuartoderecha.com/proyectos/ob/thumb.jpg)",
              }}
              rel="noreferrer"
              className="block w-32 h-12 bg-cover bg-center"
            >
              <h3 className="hidden">Marca muebles OB</h3>
            </a>
          </li>
          <li className="inline-block mr-2">
            <a
              href="https://cuartoderecha.com/es/proyecto/osman"
              target="_blank"
              style={{
                backgroundImage:
                  "url(https://cuartoderecha.com/proyectos/osman/thumb.jpg)",
              }}
              rel="noreferrer"
              className="block w-12 h-12 bg-cover bg-center"
            >
              <h3 className="hidden">Marca Osman</h3>
            </a>
          </li>
          <li className="inline-block mr-2">
            <a
              href="https://cuartoderecha.com/es/proyecto/platform4jobs-video"
              target="_blank"
              style={{
                backgroundImage:
                  "url(https://cuartoderecha.com/proyectos/platform4jobs-video/thumb.gif)",
              }}
              rel="noreferrer"
              className="block w-28 h-12 bg-cover bg-center"
            >
              <h3 className="hidden">
                Vídeo motion graphics Platform4jobs.com
              </h3>
            </a>
          </li>
          <li className="inline-block mr-2">
            <a
              href="https://cuartoderecha.com/es/proyecto/viana-guia"
              target="_blank"
              style={{
                backgroundImage:
                  "url(https://cuartoderecha.com/proyectos/viana-guia/thumb.jpg)",
              }}
              rel="noreferrer"
              className="block w-24 h-12 bg-cover bg-center"
            >
              <h3 className="hidden">
                Diseño de la guía visual de los patios del Palacio de Viana
              </h3>
            </a>
          </li>
          <li className="inline-block mr-2">
            <a
              href="https://cuartoderecha.com/es/proyecto/obcumple40"
              target="_blank"
              style={{
                backgroundImage:
                  "url(https://cuartoderecha.com/proyectos/obcumple40/thumb.gif)",
              }}
              rel="noreferrer"
              className="block w-20 h-12 bg-cover bg-center"
            >
              <h3 className="hidden">
                Diseño y desarrollo web para obcumple40.es
              </h3>
            </a>
          </li>
        </ul>
      </div>
      <p className="text-xs leading-6">
        Diseño gráfico de soportes de comunicación visual corporativos,
        comerciales y de eventos (impresos y online). Creación de identidades
        corporativas, ilustración y maquetación editorial. Estoy ahora
        trabajando en el estudio{" "}
        <a href="https://cuartoderecha.com/" target="_blank" rel="noreferrer">
          4ºd
        </a>
        .
      </p>
      <p className="text-xs py-12">13delf@gmail.com</p>
      <hr />
      <a href="https://imdeec.es/" target="_blank" rel="noreferrer">
        <img className="py-4" src={bannerImg} width="290" />
      </a>
    </div>
  </Layout>
)

export default IndexPage
