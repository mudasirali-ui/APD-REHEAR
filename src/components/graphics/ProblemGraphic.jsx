export default function ProblemGraphic() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '320px', 
      background: 'var(--white)', 
      borderRadius: '24px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      boxShadow: '0 10px 30px -5px rgba(14, 165, 233, 0.1)',
      border: '1px solid var(--sky-100)'
    }}>
      <div style={{ position: 'relative', width: '220px', height: '220px' }}>
        {/* Soft Background Circle */}
        <div style={{ position: 'absolute', inset: '10px', background: 'var(--sky-50)', borderRadius: '50%' }} />
        
        {/* Speech Bubble Icon representing Fast Speech */}
        <svg 
          style={{ position: 'absolute', top: '35px', left: '45px', filter: 'drop-shadow(0 8px 16px rgba(14, 165, 233, 0.15))' }} 
          width="130" 
          height="130" 
          viewBox="0 0 24 24" 
          fill="var(--white)" 
          stroke="var(--sky-500)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          
          {/* Fast forward symbols denoting speed */}
          <polyline points="9 9 13 12 9 15" strokeWidth="2.5" stroke="var(--sky-600)" />
          <polyline points="13 9 17 12 13 15" strokeWidth="2.5" stroke="var(--sky-600)" />
        </svg>

        {/* Confusion/Question Mark symbol */}
        <div style={{
          position: 'absolute',
          bottom: '25px',
          right: '25px',
          width: '56px',
          height: '56px',
          background: 'var(--slate-800)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--white)',
          fontSize: '26px',
          fontWeight: 'bold',
          boxShadow: '0 8px 20px rgba(15, 23, 42, 0.25)',
          border: '4px solid var(--white)'
        }}>
          ?
        </div>
      </div>
    </div>
  );
}
