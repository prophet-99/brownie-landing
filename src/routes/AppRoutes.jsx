import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import MenuPage from '../pages/menu/MenuPage';
import ContactPage from '../pages/contact/ContactPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

export default AppRoutes;
