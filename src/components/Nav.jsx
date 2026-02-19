import logo from '../assets/logo.png';

const go = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Nav() {
  return (
    <div className="nav">
      <div className="navInner glass">
        <a className="brand" href="#top" onClick={(e) => (e.preventDefault(), go('top'))}>
          <img src={logo} alt="ViaAccess logo" />
          <div className="brandTitle">
            <strong>ViaAccess</strong>
            <span>Protótipo web (Vite + React)</span>
          </div>
        </a>

        <div className="links" aria-label="Secções">
          <a className="link" href="#about" onClick={(e) => (e.preventDefault(), go('about'))}>Sobre nós</a>
          <a className="link" href="#pricing" onClick={(e) => (e.preventDefault(), go('pricing'))}>Preços</a>
          <a className="link" href="#app" onClick={(e) => (e.preventDefault(), go('app'))}>A app</a>
          <a className="link" href="#showcase" onClick={(e) => (e.preventDefault(), go('showcase'))}>Imagens</a>
        </div>
      </div>
    </div>
  );
}
