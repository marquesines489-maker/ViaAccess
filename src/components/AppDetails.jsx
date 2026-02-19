import Reveal from './Reveal';

const features = [
  {
    title: 'Rotas mais acessíveis',
    text: 'Mostrar percursos recomendados com base em acessibilidade e segurança.',
  },
  {
    title: 'Sinalização de barreiras',
    text: 'Indicar zonas críticas (escadas, acessos difíceis, obstáculos) para evitar surpresas.',
  },
  {
    title: 'Comunicação (voz ↔ texto)',
    text: 'Ferramentas para apoiar pessoas surdas/mudas: voz para texto e texto para voz, para facilitar interações.',
  },
  {
    title: 'Experiência simples',
    text: 'UI clara, textos curtos e navegação rápida para uso diário.',
  },
  {
    title: 'Evolução por feedback',
    text: 'Recolher opiniões no protótipo e melhorar antes de lançar versões completas.',
  },
];

export default function AppDetails() {
  return (
    <section className="section" id="app">
      <div className="container">
        <Reveal>
          <div className="kicker">A app</div>
          <h2 className="h2">O que o ViaAccess faz (e porquê).</h2>
          <p className="p">
            Este website é o protótipo para explicar a ideia, testar interesse e validar o valor real.
            Aqui está o núcleo do que a app pretende entregar.
          </p>
        </Reveal>

        <div className="featureGrid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.05 * i}>
              <div className="card">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
