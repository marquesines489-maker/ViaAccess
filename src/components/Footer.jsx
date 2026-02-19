import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
            <div>
              <strong style={{ color: 'rgba(243,246,255,.95)' }}>ViaAccess</strong>
              <div style={{ marginTop: 8 }}>
                Protótipo web para apresentação do projeto.
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div>© {new Date().getFullYear()}</div>
              <div style={{ marginTop: 8 }}>
                Feito com Vite + React
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
