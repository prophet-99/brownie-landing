import { useNavigate } from 'react-router-dom';

const HeroView = () => {
  const navigateRef = useNavigate();
  const navigateTo = (route) => {
    navigateRef(route);
    setTimeout(() => {
      location.reload();
    }, 0);
  };

  return (
    <div className="divider-top">
      <div className="header-info col-md-12">
        <div className="inside-wrapper container">
          <h1>Nuestro Menú</h1>

          <ul className="breadcrumb">
            <li>
              <a href="#" onClick={() => navigateTo('/')}>
                Principal
              </a>
            </li>
            <li className="active">Menú</li>
          </ul>
        </div>
      </div>
      <div className="gradient-overlay"></div>
    </div>
  );
};

export default HeroView;
