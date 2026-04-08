const STEPS = [
  {
    n: '1',
    title: 'Capture',
    text: 'Rehear transcribes spoken teacher or lecturer instructions so students do not have to rely on their own processing in real time.',
  },
  {
    n: '2',
    title: 'Decode',
    text: 'AI transcribes spoken instruction and highlights the key directions, helping students with APD separate essential steps from surrounding classroom talk.',
  },
  {
    n: '3',
    title: 'Rehear',
    text: 'Students can replay the most important instructions as often as needed, reducing confusion and improving understanding, recall, and task completion and building more confidence in the learner.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works section-pad" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow subtle">How this assistive technology works</p>
          <h2>From spoken classroom instruction to accessible, usable next steps</h2>
          <p className="section-text narrow">
            Rehear hears spoken classroom instructions, identifies the most important instructional content, and lets students replay it for better understanding.
          </p>
        </div>
        <div className="steps">
          {STEPS.map(({ n, title, text }, i) => (
            <div key={n} className="step">
              <div className="step-top">
                <span className="step-num">{n}</span>
                {i < STEPS.length - 1 && (
                  <span className="step-connector" aria-hidden="true" />
                )}
              </div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
