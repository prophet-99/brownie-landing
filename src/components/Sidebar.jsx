import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigateRef = useNavigate();
  const navigateTo = (route) => {
    navigateRef(route);
  };
  useEffect(() => {
    setTimeout(() => navigateRef('/home'), 1000);
  }, []);

  return (
    <>
      {/* <!-- ===== Sidebar starts ===== --> */}
      <aside id="sidebar" className="split col-md-2">
        <div className="affix-sidebar col-md-12">
          <article className="sidebar-nav">
            <div className="navbar navbar-default" role="navigation">
              <div className="navbar-header">
                {/* <!-- collapse button --> */}
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".sidebar-navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                {/* <!-- Logo --> */}
                <div className="brand">
                  <a href="javscript:void(0)" onClick={() => navigateTo('/')}>
                    <img
                      src="img/logo.png"
                      style={{ borderRadius: '.5rem' }}
                      alt=""
                      className="img-responsive center-block"
                    />
                  </a>
                </div>
                {/* <!-- /brand --> */}
              </div>
              {/* <!-- /navbar-header  --> */}
              <div className="navbar-collapse collapse sidebar-navbar-collapse ">
                <ul className="nav navbar-nav" id="sidenav01">
                  <li>
                    <a
                      href="javscript:void(0)"
                      onClick={() => navigateTo('/home')}
                    >
                      Principal
                    </a>
                  </li>
                  <li>
                    <a
                      href="javscript:void(0)"
                      onClick={() => navigateTo('/menu')}
                    >
                      Menú
                    </a>
                  </li>
                  <li>
                    <a
                      href="javscript:void(0)"
                      onClick={() => navigateTo('/contact')}
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
                {/* <!-- navbar-nav --> */}
              </div>
              {/* <!--/.nav-collapse --> */}
            </div>
            {/* <!--/navbar --> */}
          </article>
          {/* <!--/sidebar-nav --> */}
          <article className="navbar-info hidden-sm hidden-xs hidden-md">
            <p className="small-text">
              <i className="fas fa-map-marker-alt margin-icon"></i>Piura - Perú
            </p>
            <p className="small-text">
              <i className="fas fa-phone margin-icon"></i>(+51) 966532771
            </p>
            <p className="small-text">
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
          </article>
          {/* <!-- /navbar-info --> */}
        </div>
        {/* <!-- /affix-sidebar  --> */}
      </aside>
      {/* <!-- ===== / Sidebar ends ===== --> */}
    </>
  );
};

export default Sidebar;
