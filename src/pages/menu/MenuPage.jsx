import Footer from '../../components/Footer';
import HeroView from './views/HeroView';
import TabsView from './views/TabsView';

const MenuPage = () => (
  <>
    <div className="content-wrapper">
      {/* Hero section */}
      <HeroView />
      {/* / Hero section */}
      <div className="content-box container">
        <section className="inside-page">
          <div className="inside-wrapper container">
            <h2>Brownies para todos los gustos</h2>
            <p>
              {' '}
              Es un placer para nosotros ponernos en contacto contigo y
              ofrecerte nuestra deliciosa selección de brownies fortificados en
              hierro. En nuestra empresa, nos apasiona brindar productos de alta
              calidad que sean tanto ricos como nutritivos.
            </p>
            <p>
              Nuestros brownies son cuidadosamente elaborados con los mejores
              ingredientes, y lo más destacado es su contenido fortificado en
              hierro. Reconocemos la importancia de una dieta equilibrada y nos
              enorgullece ofrecer una opción de postre que no solo es deliciosa,
              sino también contribuye a tu bienestar.
            </p>
            {/* Tabs section */}
            <TabsView />
            {/* / Tabs section */}
          </div>
        </section>
        {/* Footer */}
        <Footer />
        {/* / Footer */}
      </div>
    </div>
  </>
);

export default MenuPage;
