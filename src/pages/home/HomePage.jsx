import Footer from '../../components/Footer';
import AlertView from './views/AlertView';
import ParallaxView from './views/ParallaxView';
import ServicesView from './views/ServicesView';
import TabsInfoView from './views/TabsInfoView';

const HomePage = () => (
  <>
    <div className="content-wrapper">
      <ParallaxView />
      {/* Divider box */}
      <div className="divider-top divider-home"></div>
      {/* / Divider box */}
      {/* Content box */}
      <article className="content-box container">
        <ServicesView />
        <TabsInfoView />
        <AlertView />
        <Footer />
      </article>
      {/* / Content box */}
    </div>
  </>
);

export default HomePage;
