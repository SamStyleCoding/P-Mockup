import Logo from '../Logo/Logo';
import './Navbar.scss';

function Navbar({ showLogo = false, logoSrc = '' }) {
  return (
    <nav className="navbar">
      {showLogo && <Logo src={logoSrc} alt="Mon Logo" />}
      <ul>
        <li>Accueil</li>
        <li>Produits</li>
        <li>À propos</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;