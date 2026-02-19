import { motion } from 'framer-motion';

const team = [
  {
    name: 'Inês Marques',
    role: '12.º ano · Curso Profissional de Gestão e Programação de Sistemas Informáticos',
  },
  {
    name: 'João Mota',
    role: '12.º ano · Curso Profissional de Gestão e Programação de Sistemas Informáticos',
  },
  {
    name: 'Eduardo Silva',
    role: '12.º ano · Curso Profissional de Análises Químicas',
  },
  {
    name: 'Rikelme Lopes',
    role: '12.º ano · Curso Profissional de Análises Químicas',
  },
];

export default function Team() {
  return (
    <section className="section section--tight" id="team">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <div className="kicker">Equipa</div>
        <h2 className="h2">Quem está por trás do ViaAccess?</h2>
        <p className="p">
          Somos alunos do 12.º ano, de cursos profissionais diferentes, unidos por uma ideia comum:
          tornar os espaços mais acessíveis para todos.
        </p>

        <div className="teamGrid">
          {team.map((p) => (
            <div className="teamCard" key={p.name}>
              <h3 style={{ fontSize: '1.05rem' }}>{p.name}</h3>
              <div className="role">{p.role}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
