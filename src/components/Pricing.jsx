import Reveal from './Reveal';

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="grid2">
          <Reveal>
            <div>
              <div className="kicker">Preços</div>
              <h2 className="h2">Simples, acessível e direto.</h2>
              <p className="p">
                O objetivo é manter o acesso fácil e permitir evolução contínua do projeto com base
                no feedback real de utilizadores.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="priceBox glass">
              <div className="pill">Plano único</div>
              <div className="price">1€</div>
              <div style={{ color: 'var(--muted2)', lineHeight: 1.55 }}>
                Acesso à app (versão base).<br />
                Atualizações e melhorias com base no feedback.
              </div>

              <div className="btnRow">
                <a className="btn" href="#app">O que inclui <span aria-hidden="true">→</span></a>
                <a className="btn btnGhost" href="#showcase">Ver no telemóvel</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
