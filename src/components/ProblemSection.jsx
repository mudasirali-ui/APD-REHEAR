import ProblemGraphic from './graphics/ProblemGraphic.jsx';

export default function ProblemSection() {
  return (
    <section className="section-pad problem-section" style={{ background: 'var(--sky-50)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="eyebrow subtle">The accessibility challenge in spoken instruction</p>
          <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            When spoken instructions are fast, in noisy environments, or complex, students with APD can lose focus and struggle to access key instructions.
          </h2>
          <p className="section-text" style={{ fontSize: '1.15rem', color: 'var(--slate-700)', textAlign: 'left' }}>
            For many students with auditory processing disorder, the hardest part of class is not the assignment itself, it is processing the spoken directions that explain the assignment. In noisy classrooms, or fast lectures, rapid or multi step instructions, and verbal changes to tasks, important details can be missed. Rehear APD is designed as assistive technology to help students revisit and understand those instructions with less stress and more confidence.
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
