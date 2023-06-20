import Footer from '../../components/Footer';
import HeroView from './views/HeroView';
import CardsView from './views/CardsView';
import FormView from './views/FormView';

const ContactPage = () => (
  <>
    <div className="content-wrapper">
      {/* Hero section */}
      <HeroView />
      {/* / Hero section */}
      <div className="content-box container">
        <section className="inside-page">
          <div className="inside-wrapper container">
            <h2>Póngase en contacto con nosotros</h2>
            <p>
              ¡Nos encantaría saber de ti! En nuestra empresa, valoramos la
              comunicación y la satisfacción de nuestros clientes. Si tienes
              alguna pregunta, comentario o consulta, no dudes en ponerte en
              contacto con nosotros. Nuestro amable y dedicado equipo de
              atención al cliente está listo para ayudarte en lo que necesites.
              Ya sea que quieras realizar un pedido, obtener información
              adicional sobre nuestros productos o simplemente compartir tus
              comentarios, estamos aquí para escucharte. Puedes comunicarte con
              nosotros a través de nuestro número de teléfono, correo
              electrónico o por el formulario.
            </p>
            <p>
              ¡No esperes más y ponte en contacto con nosotros hoy mismo! Tu
              opinión es importante para nosotros y queremos asegurarnos de
              brindarte la mejor experiencia posible. Estamos ansiosos por
              atenderte y hacer que tu experiencia sea excepcional.
            </p>
            {/* Cards view */}
            <CardsView />
            {/* / Cards view */}
            <div className="row margin1">
              <div className="col-md-7">
                <FormView />
              </div>
              <div className="col-md-5">
                <div id="map-canvas">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63575.06296849027!2d-80.70800616629543!3d-5.193084414755668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a107c793c39b7%3A0x1de8948d1c01fe28!2sPiura!5e0!3m2!1ses!2spe!4v1687287643573!5m2!1ses!2spe"
                    width="600"
                    height="450"
                    style={{ border: 0, height: '100%' }}
                    allowFullScreen
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer />
        {/* / Footer */}
      </div>
    </div>
  </>
);

export default ContactPage;
