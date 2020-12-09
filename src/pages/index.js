import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerImg from "../images/banner.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div>
        <ul className="pb-8">
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
        </ul>
      </div>
      <p className="text-xs leading-6">
        Diseño gráfico de soportes de comunicación visual corporativos,
        comerciales y de eventos (impresos y online). Creación de identidades
        corporativas, ilustración y maquetación editorial. Estoy ahora
        trabajando en el estudio 4ºd.
      </p>
      <p className="text-xs py-12">13delf@gmail.com</p>
      <hr />
      <img className="py-4" src={bannerImg} width="290" />
    </div>
  </Layout>
)

export default IndexPage
