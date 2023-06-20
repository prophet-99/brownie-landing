import { useNavigate } from 'react-router-dom';

const AlertView = () => {
  const navigateRef = useNavigate();
  const navigateTo = (route) => {
    navigateRef(route);
    setTimeout(() => {
      // location.reload();
    }, 0);
  };

  return (
    <>
      <section className="inside-page">
        <div className="inside-wrapper container">
          <div className="alert-bg alert alert-info">
            <h5>Servicio delivery</h5>
            <p>
              ¡Descubre nuestro servicio de delivery de brownies únicos en su
              clase! En cada mordisco de nuestros exquisitos brownies,
              encontrarás una combinación perfecta de sabor irresistible y
              beneficios nutricionales. Nuestros brownies están fortificados con
              hierro, un mineral esencial para mantener tu energía y vitalidad.
            </p>
            <p>
              Ya no tienes que sacrificar el gusto por lo saludable, porque con
              nuestros brownies obtendrás lo mejor de ambos mundos. Disfruta de
              un momento de indulgencia con nuestros brownies fortificados en
              hierro, entregados directamente a tu puerta. ¡Saborea el placer y
              cuida de tu bienestar con cada dulce bocado!
            </p>
            {/* <!-- button --> */}
            <a
              className="btn btn-secondary"
              onClick={() => navigateTo('/contact')}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlertView;
