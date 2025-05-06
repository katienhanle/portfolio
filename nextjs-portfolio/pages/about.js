import React from 'react';

export default function About() {
    return (
      <div style={{ background: 'linear-gradient(to bottom, #373F51, #A9BCD0)', color: 'white', minHeight: '100vh', padding: '2rem' }}>
        
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div></div>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['Home', 'About', 'Projects'].map((label) => (
              <a
                key={label}
                href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                style={{
                  position: 'relative',
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: label === 'About' ? 'bold' : 'normal',
                  fontSize: '1.35rem',
                  paddingBottom: '0.25rem',
                }}
                onMouseEnter={(e) => {
                  const underline = document.createElement('div');
                  underline.className = 'underline';
                  e.currentTarget.appendChild(underline);
                }}
                onMouseLeave={(e) => {
                  const underline = e.currentTarget.querySelector('.underline');
                  if (underline) e.currentTarget.removeChild(underline);
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </header>
  
        {/* About Content */}
        <section style={{ marginTop: '5rem', textAlign: 'left' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>I’m Katie!</h1>
          {/* Add more about content below if needed */}
        </section>
      </div>
    );
  }
  