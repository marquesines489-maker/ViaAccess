import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="section section--tight" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <div className="kicker">Próximo passo</div>
        <h2 className="h2">Dá-nos feedback</h2>
        <p className="p">
          Este protótipo é o início. Queremos ouvir a tua opinião para validar a ideia e melhorar o
          ViaAccess antes de avançarmos para versões mais completas.
        </p>

        <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            className="btn"
            href="https://forms.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Enviar feedback
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="btn btn--ghost"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('top');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Voltar ao topo
          </a>
        </div>

        <div className="footerNote">
          Dica: quando tiveres o link do formulário (Google Forms) ou email oficial da equipa/escola,
          troca o botão acima para esse link.
        </div>
      </motion.div>
    </section>
  );
}
