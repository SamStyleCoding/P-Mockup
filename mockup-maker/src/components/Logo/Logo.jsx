import './Logo.scss';

function Logo({ src = '', alt = 'Logo' }) {
  return (
    <div className="logo-container">
      {src ? <img src={src} alt={alt} /> : <div className="logo-placeholder">Logo</div>}
    </div>
  );
}

export default Logo;