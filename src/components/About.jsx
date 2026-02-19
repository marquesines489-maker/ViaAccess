import Reveal from './Reveal';

const team = [
  { name: 'Inês Marques', role: '12.º · Gestão e Programação de Sistemas Informáticos' },
  { name: 'João Mota', role: '12.º · Gestão e Programação de Sistemas Informáticos' },
  { name: 'Eduardo Silva', role: '12.º · Análises Químicas' },
  { name: 'Rikelme Lopes', role: '12.º · Análises Químicas' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="kicker">Sobre nós</div>
          <h2 className="h2">Uma equipa, uma missão: acessibilidade.</h2>
          <p className="p">
            O ViaAccess é um projeto escolar com foco em acessibilidade, mobilidade e inclusão.
            Este protótipo serve para comunicar a ideia, testar interesse e recolher feedback.
          </p>
        </Reveal>

        <div style={{ height: 18 }} />

        <div className="featureGrid">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={0.05 * i}>
              <div className="card">
                <h3>{p.name}</h3>
                <p>{p.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
