const CardsView = () => (
  <>
    <div className="row contact-boxes text-center margin1">
      <div className="col-md-3">
        <div className="box-hover icon p-2">
          <i className="fa fa-envelope small-icon"></i>

          <div className="contact-icon-info">
            <h5>Correo electrónico</h5>
            <p>
              Dirección de correo:{' '}
              <a href="mailto:email@yoursite.com">liveofart508@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 res-margin">
        <div className="box-hover icon p-2">
          <i className="fa fa-clock small-icon"></i>

          <div className="contact-icon-info">
            <h5>Horas</h5>
            <p>
              L-V: 9:30am-11:00pm
              <br />
              S-D: 9:30am-2:00pm
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 res-margin">
        <div className="box-hover icon p-2">
          <i className="fa fa-map-marker small-icon"></i>

          <div className="contact-icon-info">
            <h5>Nuestra localización</h5>
            <p>Piura - Perú</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 res-margin">
        <div className="box-hover icon p-2">
          <i className="fa fa-phone small-icon"></i>

          <div className="contact-icon-info">
            <h5>Llamanos</h5>
            <p>
              Número de celular: <br />
              (+51) 966532771
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CardsView;
