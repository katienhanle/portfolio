import Image from 'next/image';
import React from 'react';


export default function Home() {
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
                fontWeight: label === 'Home' ? 'bold' : 'normal',
                fontSize: '1.35rem',
                paddingBottom: '0.25rem'
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

      {/* Hero Section */}
      <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4rem', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '60%' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hi, I’m Katie.</h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            I’m a UI/UX designer crafting clean and practical experiences to highlight inclusivity in all forms of art.
          </p>
          <hr style={{ margin: '2rem 0', borderColor: 'rgba(255, 255, 255, 0.3)' }} />
        </div>
        <div>
          <img
            src="/headshot.png"
            alt="Katie Headshot"
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              boxShadow: '0 0 25px rgba(255,255,255,0.25)'
            }}
          />
        </div>
      </section>

      {/* Projects */}
      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Recent Work</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 450px' }}>
          <img
            src="/phonedisplay.png"
            alt="iMessage Project"
            style={{ width: '100%', height: 'auto', borderRadius: '1rem'}}
          />
        </div>
          <div style={{ flex: '2 1 500px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>iMessage Interface Revamp</h3>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>UX Research · App Design</p>
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              lineHeight: '1.7',
              marginTop: '1rem',
              color: 'white'
            }}>
              <li>Orchestrated project focused on redesigning the iMessage interface to enhance user experience and increase discoverability of key features.</li>
              <li>Strategized and coordinated team efforts, delegating tasks efficiently and ensuring timely progress meetings.</li>
              <li>Implemented user-centered design principles to optimize feature visibility and accessibility within the iMessage platform.</li>
            </ul>
            <a className="ghost-button" href="/projects/imessage">
              View Project →
            </a>


          </div>
        </div>
      </section>
      <footer style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Name & Pages */}
          <div>
            <h3 style={{ fontWeight: 'bold' }}>Katie Le</h3>
            <p style={{ marginTop: '0.5rem' }}>About Me · Resume (WIP)</p>
          </div>

          {/* Message */}
          <div>
            <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Thanks for stopping by!</p>
            <p style={{ maxWidth: '280px' }}>
              If you have any questions and would like to learn more, feel free to reach out to me.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Let’s Connect ⇄</p>
            <p>
              <a href="mailto:katienhanle@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                📧 katienhanle@gmail.com
              </a>
            </p>
            <p>
              <a href="https://linkedin.com/in/katienhanle/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                🌐 linkedin.com/in/katienhanle/
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
