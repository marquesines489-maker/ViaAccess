import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="section section--tight" id="mission">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <div className="kicker">Missão 4</div>
        <h2 className="h2">O Protótipo</h2>
        <p className="p">
          Nesta missão, levamos a ideia do papel para um protótipo. Um protótipo é como um “rascunho”
          do produto: uma versão inicial que mostra a essência da ideia e permite testar na prática.
        </p>

        <div className="cardGrid">
          <div className="card">
            <h3>Mensagens principais</h3>
            <p>
              O que o ViaAccess resolve, por que é útil e como pode melhorar a autonomia e a inclusão.
            </p>
          </div>
          <div className="card">
            <h3>Website simples e funcional</h3>
            <p>
              Um site rápido para apresentar características e benefícios, sem precisar de perfeição.
            </p>
          </div>
          <div className="card">
            <h3>Tecnologia como aliada</h3>
            <p>
              Criar rapidamente, ajustar textos/imagens e melhorar com base em feedback real.
            </p>
          </div>
          <div className="card">
            <h3>Teste de mercado</h3>
            <p>
              Recolher opiniões, aprender com o que as pessoas dizem e iterar antes de avançar.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
