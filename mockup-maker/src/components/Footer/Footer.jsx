import './Footer.scss';

function Footer() {

  const year = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <p>© {year} Mon Application. Tous droits réservés.</p>
      <div className="socials">
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
