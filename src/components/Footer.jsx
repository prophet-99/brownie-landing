const Footer = () => (
  <>
    <footer className="footer">
      {/* <!-- image gradient overlay--> */}
      <div className="gradient-overlay top-to-bottom"></div>
      <div className="inside-wrapper container">
        <div className="col-md-3 col-md-offset-3">
          <div className="brand-footer">
            <a href="index.html">
              <img
                src="img/logo.png"
                alt=""
                className="img-responsive center-block"
                style={{ borderRadius: '.5rem' }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 margin-footer text-center-sm">
          {/* <!-- Logo --> */}
          <p>
            <i className="fas fa-map-marker-alt margin-icon"></i>Piura - Perú
          </p>
          <p>
            <i className="fas fa-phone margin-icon"></i>(+51) 966532771
          </p>
          <p>
            <i className="far fa-clock margin-icon"></i>Lunes-Viernes:
            9:30am-10:00pm | Sábado y Domingo: 9:30am-2:00pm
          </p>

          {/* <!--Social icons --> */}
          <div className="social-media ">
            <a
              href="https://wa.me/51966532771"
              target="_blank"
              rel="noreferrer"
              title=""
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.tiktok.com/@mrbrownie.pe"
              target="_blank"
              rel="noreferrer"
              title=""
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/MisterBrowniePe"
              target="_blank"
              rel="noreferrer"
              title=""
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/mister_brownie.pe?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noreferrer"
              title=""
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          {/* <!-- /brand --> */}
        </div>
        <div className="col-md-12 text-center">
          <p className="copy">
            Copyright 2023 / Designed by <a href="#">prophet-99</a>
          </p>
        </div>
        {/* <!--/ footer--> */}
      </div>
      {/* <!-- / inside-wrapper --> */}
      {/* <!-- Go To Top Link --> */}
      <div className="page-scroll">
        <a href="#top" className="back-to-top">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
      {/* <!--/page-scroll--> */}
    </footer>
  </>
);

export default Footer;
