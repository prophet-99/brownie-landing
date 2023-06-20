import { useNavigate } from 'react-router-dom';

const ParallaxView = () => {
  const navigateRef = useNavigate();
  const navigateTo = (route) => {
    navigateRef(route);
    setTimeout(() => {
      location.reload();
    }, 0);
  };

  return (
    <div
      id="slider"
      className="parallax-slider"
      style={{ width: '1200px', margin: '0 auto' }}
    >
      {/* <!-- Slide 1 --> */}
      <div
        className="ls-slide"
        data-ls="duration:6000; transition2d:7; kenburnszoom:out; kenburnsscale:1.2;"
      >
        {/* <!-- background image  --> */}
        <img src="img/slider/slide1.jpg" className="ls-bg" alt="" />
        {/* <!-- text  --> */}
        <div
          className="ls-l header-wrapper"
          data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400;"
        >
          <div className="header-text">
            <h1>
              <span>Bienvenido a</span> <br />
              Mr Brownie
            </h1>
            <p className="header-p">
              Ofrecemos brownies deliciosos fortificados en hierro
            </p>
            <div className="hidden-small">
              <a
                className="btn btn-primary"
                onClick={() => navigateTo('/menu')}
              >
                Nuestro menú
              </a>
            </div>
            {/* <!--/hidden-small --> */}
          </div>
          {/* <!-- header-text  --> */}
        </div>
        {/* <!-- ls-l  --> */}
      </div>
      {/* <!-- ls-slide --> */}
      {/* <!-- Slide 2 --> */}
      <div
        className="ls-slide"
        data-ls="duration:6000; transition2d:7; kenburnszoom:out; kenburnsscale:1.2;"
      >
        {/* <!-- background image  --> */}
        <img src="img/slider/slide2.jpg" className="ls-bg" alt="" />
        {/* <!-- text  --> */}
        <div
          className="ls-l header-wrapper"
          data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400;"
        >
          <div className="header-text">
            <h1>Ofrecemos delivery</h1>
            <p className="header-p">
              Disfruta tu momento dulce sin salir de casa y aumentando tus
              niveles de hierro
            </p>
            {/* <!--the div below is hidden on small screens  --> */}
            <div className="hidden-small">
              <a
                className="btn btn-primary"
                onClick={() => navigateTo('/contact')}
              >
                Contáctanos
              </a>
            </div>
            {/* <!--/hidden-small --> */}
          </div>
          {/* <!-- header-text  --> */}
        </div>
        {/* <!-- ls-l  --> */}
      </div>
      {/* <!-- ls-slide --> */}
      {/* <!-- Slide 3 --> */}
      <div
        className="ls-slide"
        data-ls="duration:6000; transition2d:7; kenburnszoom:out; kenburnsscale:1.2;"
      >
        {/* <!-- background image  --> */}
        <img src="img/slider/slide3.jpg" className="ls-bg" alt="" />
        {/* <!-- text  --> */}
        <div
          className="ls-l header-wrapper"
          data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400;"
        >
          <div className="header-text">
            <h1>
              <span>Bienvenido a</span> <br />
              Mr Brownie
            </h1>
            <p className="header-p">
              Ofrecemos brownies deliciosos fortificados en hierro
            </p>
            {/* <!--the div below is hidden on small screens  --> */}
            <div className="hidden-small">
              <a
                className="btn btn-primary"
                onClick={() => navigateTo('/menu')}
              >
                Nuestro menú
              </a>
            </div>
            {/* <!--/hidden-small --> */}
          </div>
          {/* <!-- header-text  --> */}
        </div>
        {/* <!-- ls-l  --> */}
      </div>
      {/* <!-- ls-slide --> */}
      {/* <!-- Slide 4 --> */}
      <div
        className="ls-slide"
        data-ls="duration:6000; transition2d:7; kenburnszoom:out; kenburnsscale:1.2;"
      >
        {/* <!-- background image  --> */}
        <img src="img/slider/slide4.jpg" className="ls-bg" alt="" />
        {/* <!-- text  --> */}
        <div
          className="ls-l header-wrapper"
          data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400;"
        >
          <div className="header-text">
            <h1>Ofrecemos delivery</h1>
            <p className="header-p">
              Disfruta tu momento dulce sin salir de casa y aumentando tus
              niveles de hierro
            </p>
            {/* <!--the div below is hidden on small screens  --> */}
            <div className="hidden-small">
              <a
                className="btn btn-primary"
                onClick={() => navigateTo('/contact')}
              >
                Contáctanos
              </a>
            </div>
            {/* <!--/hidden-small --> */}
          </div>
          {/* <!-- header-text  --> */}
        </div>
        {/* <!-- ls-l  --> */}
      </div>
      {/* <!-- ls-slide --> */}
    </div>
  );
};

export default ParallaxView;
