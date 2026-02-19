import Reveal from './Reveal';

import m1 from '../assets/mockup-1.png';
import m2 from '../assets/mockup-2.png';
import m3 from '../assets/mockup-3.png';
import m4 from '../assets/mockup-4.png';

const shots = [
  { title: 'Ecrã inicial', img: m1 },
  { title: 'Mapa / rota', img: m2 },
  { title: 'Comunicação (voz↔texto)', img: m3 },
  { title: 'Detalhes / acessos', img: m4 },
];

export default function Showcase() {
  return (
    <section className="section" id="showcase">
      <div className="container">
        <Reveal>
          <div className="kicker">Imagens</div>
          <h2 className="h2">Como seria no telemóvel</h2>
          <p className="p">
            Coloca aqui screenshots/mockups para as pessoas perceberem a app em segundos.
          </p>
        </Reveal>

        <div className="showcaseRow">
          <Reveal>
            <div className="glass" style={{ padding: 18 }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 10 }}>Como usar esta secção</h3>
              <p className="p" style={{ fontSize: '1rem' }}>
                Podes exportar mockups do Figma/Canva ou usar prints temporários.
                O importante é mostrar o fluxo: navegação + comunicação.
              </p>
              <div className="btnRow">
                <a className="btn btnGhost" href="#pricing">Voltar aos preços</a>
              </div>
            </div>
          </Reveal>

          <div className="phoneGrid">
            {shots.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * i}>
                <div className="phone glass">
                  <div style={{ color: 'var(--muted2)', marginBottom: 10, fontWeight: 900 }}>
                    {s.title}
                  </div>
                  <div className="phoneFrame">
                    <div className="phoneTop" />
                    <img className="phoneImg" src={s.img} alt={s.title} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
