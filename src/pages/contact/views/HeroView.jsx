import { useNavigate } from 'react-router-dom';

const HeroView = () => {
  const navigateRef = useNavigate();
  const navigateTo = (route) => {
    navigateRef(route);
    // setTimeout(() => {
    //   location.reload();
    // }, 0);
  };

  return (
    <>
      <div className="divider-top">
        <div className="header-info col-md-12">
          <div className="inside-wrapper container">
            <h1>Contáctanos</h1>

            <ul className="breadcrumb">
              <li>
                <a href="#" onClick={() => navigateTo('/home')}>
                  Principal
                </a>
              </li>
              <li className="active">Contacto</li>
            </ul>
          </div>
        </div>

        <div className="gradient-overlay"></div>
      </div>
    </>
  );
};
export default HeroView;
