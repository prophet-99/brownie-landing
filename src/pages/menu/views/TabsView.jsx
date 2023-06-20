const TabsView = () => (
  <>
    <div className="col-lg-9" style={{ paddingInline: 0 }}>
      <div className="tabbable">
        <div className="tab-content" style={{ padding: 0 }}>
          <div className="tab-pane fade active in" id="tab1">
            <div className="prices-main" style={{ marginBlockStart: '1rem' }}>
              <div className="col-md-12">
                <div className="menu-body">
                  <div className="menu-section">
                    <div className="menu-item">
                      <div className="menu-item-pic lightbox">
                        <a href="img/menu/price1.jpg">
                          <img
                            className="img-responsive img-circle img-price"
                            src="img/menu/price1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="menu-item-name">
                        Brownie con glaseado de chocolate y frutos secos
                      </div>
                      <div className="menu-item-price">S/.-</div>
                      <div className="menu-item-description">
                        <p>
                          Experimenta el placer de nuestro brownie con un toque
                          especial: está elaborado con plátano, huevo y avena,
                          endulzado con miel. Lo mejor de todo es su glaseado de
                          chocolate 100% natural, que realza su sabor sin
                          comprometer su calidad y salud. ¡Disfruta de este
                          brownie rico y nutritivo en cada mordisco!
                        </p>
                      </div>
                    </div>

                    <div className="menu-item">
                      <div className="menu-item-pic lightbox">
                        <a href="img/menu/price2.jpg">
                          <img
                            className="img-responsive img-circle img-price"
                            src="img/menu/price2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="menu-item-name">
                        Brownie con glaseado de vainilla y frutos secos
                      </div>
                      <div className="menu-item-price">S/.-</div>
                      <div className="menu-item-description">
                        <p>
                          Deléitate con nuestro brownie hecho de manera natural,
                          con plátano, huevo, avena y endulzado con miel. Su
                          irresistible glaseado de vainilla realza su sabor sin
                          perder su calidad y saludabilidad. ¡Disfruta de este
                          brownie delicioso y nutritivo en cada bocado!
                        </p>
                      </div>
                    </div>

                    <div className="menu-item">
                      <div className="menu-item-pic lightbox">
                        <a href="img/menu/price3.jpg">
                          <img
                            className="img-responsive img-circle img-price"
                            src="img/menu/price3.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="menu-item-name">
                        Mini brownies con diferentes formas
                      </div>
                      <div className="menu-item-price">S/.-</div>
                      <div className="menu-item-description">
                        <p>
                          Descubre la magia de nuestros brownies fortificados en
                          divertidas formas como gatitos, pajaritos, perros y
                          más. Cada bocado es una experiencia deliciosa y
                          nutritiva, elaborada con ingredientes de alta calidad
                          y enriquecidos con nutrientes esenciales. ¡Déjanos
                          endulzar tus momentos con nuestros adorables y
                          nutritivos brownies!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TabsView;
