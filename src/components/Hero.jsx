import Reveal from './Reveal';
import logo from '../assets/logo.png';

export default function Hero() {
  return (
    <header className="section hero" id="top">
      <div className="container">
        <div className="grid2">
          <Reveal>
            <div className="heroPanel glass">
              <div className="pillRow">
                <div className="pill">Acessibilidade</div>
                <div className="pill">Mobilidade</div>
                <div className="pill">Comunicação</div>
              </div>

              <div className="kicker">ViaAccess</div>
              <h1 className="h1">A rota mais acessível começa com informação clara.</h1>
              <p className="p">
                Um protótipo criado por alunos do 12.º ano para reduzir barreiras na escola e na
                comunidade — com navegação acessível e ferramentas de comunicação (voz↔texto).
              </p>

              <div className="btnRow">
                <a className="btn" href="#pricing">Ver preço <span aria-hidden="true">→</span></a>
                <a className="btn btnGhost" href="#showcase">Ver mockups</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="orbWrap" aria-label="Marca ViaAccess">
              <div className="orb">
                <div className="orbInner">
                  <img src={logo} alt="ViaAccess logo" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
