import { motion } from 'framer-motion';

const items = [
  {
    title: 'Mapas acessíveis',
    text: 'Destaque de percursos, entradas e pontos importantes para escolher o caminho mais acessível.',
  },
  {
    title: 'Informação clara',
    text: 'Ícones e textos curtos para entender rapidamente opções e obstáculos.',
  },
  {
    title: 'Foco na inclusão',
    text: 'Pensado para apoiar alunos e sensibilizar a comunidade escolar para acessibilidade.',
  },
  {
    title: 'Apoio às escolas',
    text: 'Ajuda a identificar barreiras e prioridades para melhorias futuras.',
  },
];

export default function Features() {
  return (
    <section className="section section--tight" id="features">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <div className="kicker">Como funciona</div>
        <h2 className="h2">Benefícios do ViaAccess</h2>
        <p className="p">
          Este website é o nosso protótipo: simples, funcional e feito para comunicar a ideia com
          clareza, recolher opiniões e evoluir rapidamente.
        </p>

        <div className="cardGrid">
          {items.map((it) => (
            <div className="card" key={it.title}>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
