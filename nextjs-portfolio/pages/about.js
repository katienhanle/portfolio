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
      <section style={{ marginTop: '5rem', maxWidth: '750px', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>I’m Katie!</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          I’m a designer, visual storyteller, and full-time creative. I studied Cognitive Science with a specialization in Design & Interaction, and I'm especially motivated by inclusive design, creating experiences that are usable and welcoming for everyone. I aim to build with empathy at every step.

        </p>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          I design clean, user-friendly digital experiences from mobile UIs to branded graphics to social content that connects. I’m drawn to projects that merge utility with emotion.
        </p>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          Creativity has always been my core, not just in design but in movement. When I’m not building interfaces or editing videos, you can probably find me choreographing, leading dance teams, or performing onstage. That same love for rhythm, storytelling, and visual impact shows up in the way I design, with flow, intention, and detail.
        </p>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          I love working across tools like Figma, VS Code, Blender, and After Effects — and bringing concepts to life whether they’re websites, campaigns, or 3D models.
        </p>
        <p style={{ fontSize: '1.3rem', fontWeight: '500', marginTop: '3rem' }}>
          Let’s collaborate →
        </p>
      </section>
    </div>
  );
}
