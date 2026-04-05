import ProblemGraphic from './graphics/ProblemGraphic.jsx';

export default function ProblemSection() {
  return (
    <section className="section-pad problem-section" style={{ background: 'var(--sky-50)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="eyebrow subtle">The Challenge</p>
          <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            When spoken instructions move too fast, learning breaks down.
          </h2>
          <p className="section-text" style={{ fontSize: '1.15rem', color: 'var(--slate-700)', marginBottom: '1.5rem', textAlign: 'left' }}>
            For many students, the hardest part of class is not the work itself. It is catching and holding onto the spoken instructions that explain what the work actually is.
          </p>
          <p className="section-text" style={{ fontSize: '1.15rem', color: 'var(--slate-700)', textAlign: 'left' }}>
            In noisy classrooms, fast lectures, multi-step teacher directions, and verbal assignment changes, important details can be missed. Rehear APD is built to help students revisit those moments with less stress and more clarity.
          </p>
        </div>
        <div className="problem-visual">
          <ProblemGraphic />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .problem-section .container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
