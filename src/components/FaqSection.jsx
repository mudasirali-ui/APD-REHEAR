import { useId, useState } from 'react';

const FAQS = [
  {
    q: 'What is Rehear?',
    a: 'Rehear APD is an assistive technology tool for spoken instruction. It helps students capture, process, replay, and clarify directions they hear in class. It is built for students with auditory processing disorder, auditory processing challenges, hearing-related access needs, and anyone who benefits from rehearing spoken information more clearly.',
  },
  {
    q: 'How is Rehear different from speech or presentation apps?',
    a: 'Those tools often optimize for performance on stage. Rehear optimizes for listening: chunking, replay, and making sense of what you heard so you can return to the parts you need without treating hearing as an afterthought.',
  },
  {
    q: 'Who is Rehear for?',
    a: 'Students, professionals, and anyone who wants spoken content available again in a structured way. It helps when you miss a detail the first time, need information in smaller pieces, or want a calmer path from sound to understanding.',
  },
  {
    q: 'Does Rehear replace medical care, audiologists, or hearing aids?',
    a: 'No. Rehear is an assistive learning and accessibility tool designed to improve access to spoken instruction for students with auditory processing disorder (APD) and related auditory processing challenges. It does not diagnose, treat, or replace professional medical, educational, or audiological assessment in any way. Seek your audiologist and treating doctor for clarity about auditory processing disorder if you think it might affect you or someone you know.',
  },
  {
    q: 'How do I get started?',
    a: 'Use the Contact form to get in touch. Then explore features, FAQs, and the “how sound moves” diagram at the top of the page—it mirrors the same in → process → out → understood story.',
  },
];

export default function FaqSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section section-pad" id="faqs" aria-labelledby="faqs-heading">
      <div className="container faq-inner">
        <div className="section-head faq-head">
          <p className="eyebrow subtle">FAQ</p>
          <h2 id="faqs-heading">Questions &amp; answers</h2>
        </div>
        <div className="faq-list" role="list">
          {FAQS.map((item, i) => {
            const panelId = `${baseId}-panel-${i}`;
            const triggerId = `${baseId}-trigger-${i}`;
            const expanded = openIndex === i;
            return (
              <div key={item.q} className="faq-item" role="listitem">
                <h3 className="faq-item-title">
                  <button
                    type="button"
                    id={triggerId}
                    className="faq-trigger"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(expanded ? -1 : i)}
                  >
                    <span className="faq-trigger-text">{item.q}</span>
                    <span className="faq-trigger-icon" aria-hidden="true">
                      {expanded ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="faq-panel"
                  hidden={!expanded}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
