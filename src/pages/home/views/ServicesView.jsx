const ServicesView = () => (
  <section className="inside-page">
    <div className="inside-wrapper container">
      <div className="col-md-12">
        <h2 className="text-center-sm">Hecho con amor</h2>
        <img
          className="img-responsive img-rounded pull-right-lg col-md-4 center-block"
          src="img/services/services-home.jpg"
          alt=""
          style={{
            width: '428px',
            height: '304px',
            objectFit: 'cover',
            objectPosition: 'bottom',
          }}
        />
        <p className="lead res-margin">
          Te brindamos la oportunidad de disfrutar de brownies deliciosos y
          además fortificados con hierro. Nuestros brownies no solo son
          irresistibles en sabor, sino que también te brindan un aporte
          adicional de hierro, un mineral esencial para tu salud. Ahora puedes
          deleitarte y beneficiarte de sus propiedades nutritivas, todo en la
          comodidad de tu hogar.
        </p>
        <p>
          Recuerda que: &quot;Uno de los grupos vulnerables que presentan una
          alta prevalencia de anemia son los niños, los adolescentes y mujeres
          embarazadas. Por eso te ofrecemos nuestro producto, con el fin de
          combatir esta problemática desde raíz, que tiene efecto positivo en el
          aumento de niveles de hemoglobina, sin presentar efectos negativos en
          la ganancia de peso. &quot;
        </p>
      </div>
      {/* <!-- owl-carousel --> */}
      <div
        id="owl-services"
        className="owl-carousel owl-theme text-center res-margin"
      >
        {/* <!-- service 1  --> */}
        <div className="col-lg-12 p-1">
          <div className="box-hover icon p-3">
            {/* <!-- service icon --> */}
            <i className="flaticon-birthday-cake-2  circle"></i>
            {/* <!-- service content --> */}
            <div className="service-content">
              <h5>Servicio de detalles para fechas especiales</h5>
              <p>
                Celebra las ocasiones especiales con nuestro servicio de
                detalles personalizados. Sorprende a tus seres queridos con
                regalos únicos y significativos que harán que cada fecha sea aún
                más especial.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- service 2  --> */}
        <div className="col-lg-12 p-1">
          <div className="box-hover icon p-3">
            {/* <!-- service icon --> */}
            <i className="flaticon-cake-5  circle"></i>
            {/* <!-- service content --> */}
            <div className="service-content">
              <h5>Regalo de un Super Brownie</h5>
              <p>
                Haz que su cumpleaños sea inolvidable con nuestro regalo
                estrella: un super brownie. Delicioso, decadente y preparado con
                amor, este regalo dulce hará que su día especial sea aún más
                sabroso y memorable.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- service 3  --> */}
        <div className="col-lg-12 p-1">
          <div className="box-hover icon p-3">
            {/* <!-- service icon --> */}
            <i className="flaticon-cake-10  circle"></i>
            {/* <!-- service content --> */}
            <div className="service-content">
              <h5>Servicio de catering</h5>
              <p>
                Deleite a sus invitados con nuestro servicio de catering
                excepcional. Nuestro equipo profesional y apasionado se
                encargará de cada detalle como guste, brindándole una
                experiencia culinaria única e impecable.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- service 4 --> */}
        <div className="col-lg-12 p-1">
          <div className="box-hover icon p-3">
            {/* <!-- service icon --> */}
            <i className="flaticon-cake-1  circle"></i>
            {/* <!-- service content --> */}
            <div className="service-content">
              <h5>Catering</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dictum malesuada.
              </p>
              <a className="btn btn-primary btn-md" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* <!-- service 5 --> */}
        <div className="col-lg-12 p-1">
          <div className="box-hover icon p-3">
            {/* <!-- service icon --> */}
            <i className="flaticon-cooking circle"></i>
            {/* <!-- service content --> */}
            <div className="service-content">
              <h5>Custom orders</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dictum malesuada.
              </p>
              <a className="btn btn-primary btn-md" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* <!-- service 5 --> */}
        <div className="col-lg-12 p-1">
          <div className="box-hover icon p-3">
            {/* <!-- service icon --> */}
            <i className="flaticon-delivery  circle"></i>
            {/* <!-- service content --> */}
            <div className="service-content">
              <h5>Quick Delivery</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dictum malesuada.
              </p>
              <a className="btn btn-primary btn-md" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /owl-carousel --> */}
    </div>
  </section>
);

export default ServicesView;
