const TabsInfoView = () => (
  <>
    <div className="bg-light">
      <section className="inside-page">
        <div className="inside-wrapper container">
          <div className="col-md-12">
            {/* <!-- Tabs --> */}
            <ul className="nav nav-tabs">
              <li className="active">
                <a data-toggle="tab" href="#A">
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#B">
                  Nuestra filosofía
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#C">
                  Ingredientes de calidad
                </a>
              </li>
            </ul>
            {/* <!-- /nav-tabs --> */}
            {/* <!--/nav nav-tabs --> */}
            <div className="tabbable">
              <div className="tab-content">
                <div className="tab-pane active in fade" id="A">
                  <div className="col-md-5 p-2">
                    <img
                      className="img-responsive img-rounded center-block"
                      src="img/tab1.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="text-center-sm">¿Por qué elegirnos?</h3>
                  {/* <!-- about carousel --> */}
                  <p>
                    Además de ser una marca piurana y peruana, Mr Brownie se
                    puede incluir en las principales comidas de los engreídos
                    del hogar tal como el desayuno, además de brindar un gran
                    aporte durante el proceso de gestación, por lo cual es
                    ampliamente recomendado por el aporte de hierro que tiene
                    cada porción.
                  </p>
                  <p>
                    <strong>
                      Esto se debe a que el porcentaje de sangrecita que
                      contiene Mr Brownie pueden alcanzar, casi, el
                      requerimiento diario de hierro que requiere un niño y una
                      embarazada.
                    </strong>
                  </p>
                </div>
                {/* <!-- /tab-pane --> */}
                <div className="tab-pane fade" id="B">
                  <h3 className="text-center-sm">Nuestra filosofía</h3>
                  <div className="col-md-4 p-2 pull-right-lg">
                    <img
                      className="img-responsive img-rounded center-block"
                      src="img/tab2.jpg"
                      alt=""
                    />
                  </div>
                  <p>
                    <strong>Visión</strong>
                  </p>
                  <p>
                    Ser reconocidos como líderes en la industria de alimentos
                    saludables siendo una marca globalmente reconocida y
                    preferida por los consumidores, ofreciendo brownies
                    fortificados con hierro y otros nutrientes esenciales de
                    alta calidad, asi como una referencia en la promoción de una
                    alimentación balanceada y nutritiva.
                  </p>
                  <p>
                    <strong>Misión</strong>
                  </p>
                  <p>
                    Nuestra misión es elaborar y ofrecer brownies deliciosos y
                    fortificados con hierro que ayudan a mejorar la salud y el
                    bienestar de las personas. Nos comprometemos a utilizar
                    ingredientes de calidad y procesos de producción cuidadosos
                    para garantizar la excelencia en cada brownie que sale de
                    nuestras instalaciones.
                  </p>
                </div>
                {/* <!-- /tab-pane --> */}
                <div className="tab-pane fade" id="C">
                  <h3 className="text-center-sm">Ingredientes de calidad</h3>
                  <p>
                    Nuestros brownies estan hechos a base de plátano, huevos,
                    miel, vainilla, cacao, avena, frutos secos y sangrecita
                    cocida. Son alimentos altamente recomendables por su alto
                    valor nutricional y los beneficios que aportan en la
                    alimentación diario.
                  </p>
                  <p>
                    <strong>
                      En el caso de la sangre de pollo tiene alta concentración
                      de Hierro, beneficioso para la salud, para la producción
                      de glóbulos rojos.demás, la sangre de pollo es una
                      excelente fuente de vitaminas del complejo B, esencial
                      para el metabolismo y el funcionamiento adecuado del
                      sistema nervioso.
                    </strong>
                  </p>
                </div>
                {/* <!-- /tab-pane --> */}
              </div>
              {/* <!-- /tab-content --> */}
            </div>
            {/* <!-- /tabbable --> */}
          </div>
          {/* <!-- /col-md-12 --> */}
        </div>
        {/* <!-- /inside-wrapper--> */}
      </section>
    </div>
  </>
);

export default TabsInfoView;
