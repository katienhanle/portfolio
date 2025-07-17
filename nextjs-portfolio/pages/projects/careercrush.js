import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #373F51, #373F51, #565a73,rgb(112, 136, 162))',
      backgroundAttachment: 'fixed',
      color: 'white',
      minHeight: '100vh',
      padding: '2rem'
    }}>

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
                fontWeight: label === 'Projects' ? 'bold' : 'normal',
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

      {/* Title Section */}
      <section style={{ marginTop: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Career Crush: A Swipe-Based Internship Matching App</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '2rem',
          alignItems: 'flex-start',
          marginTop: '2rem',
          maxWidth: '1200px',
          marginInline: 'auto'
        }}>
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontWeight: 'bold' }}>TLDR:</h3>
              <p>
                Career Crush is a mobile internship/job search platform that connects students and recruiters through a familiar swipe-based interaction model. The app aims to reduce application fatigue and improve engagement by offering a universal profile, messaging features, and a recruiter dashboard.
              </p>
            </div>
            <div style={{ lineHeight: '2' }}>
              <p><strong>Client:</strong><br />UCSD Students & Recruiters (conceptual)</p>
              <p><strong>My Role:</strong><br />UX/UI Designer, Researcher</p>
              <p><strong>Timeline:</strong><br />January 2025 - March 2025</p>
            </div>
          </div>

          <div style={{ justifySelf: 'start' }}>
            <Image
              src="/careercrushdisplay.png"
              alt="Career Crush Project"
              width={360}
              height={720}
              style={{ width: '100%', maxWidth: '360px', borderRadius: '1rem', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section style={{ marginTop: '4rem', maxWidth: '800px', marginInline: 'auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Challenge</h2>
        <p style={{ marginTop: '1rem' }}>
          Job platforms like LinkedIn and Handshake often overwhelm students with irrelevant listings and clunky UI. Our goal was to simplify the internship application process by offering a clean, intuitive interface with meaningful personalization.
        </p>
      </section>

      {/* Key Features */}
      <section style={{ marginTop: '4rem', maxWidth: '800px', marginInline: 'auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Key Features</h2>
        <ul style={{ listStyleType: 'disc', marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
          <li>Swipe-Based Job Discovery</li>
          <li>Universal Profile & One-Click Apply</li>
          <li>Personalized Preference Setup</li>
          <li>Favorites Tab & Recruiter Messaging</li>
          <li>Recruiter Dashboard for Candidate Sorting</li>
        </ul>
      </section>

      {/* Design Justification */}
      <section style={{ marginTop: '4rem', maxWidth: '800px', marginInline: 'auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Design Justification</h2>
        <ul style={{ listStyleType: 'disc', marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
          <li>Followed minimalist aesthetic to reduce cognitive load</li>
          <li>Applied Nielsen’s heuristics for visibility and user control</li>
          <li>Used recognizable icons and simple interaction paths</li>
        </ul>
      </section>

      {/* Outcomes & Reflection */}
      <section style={{ marginTop: '4rem', maxWidth: '800px', marginInline: 'auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Outcomes & Reflection</h2>
        <p>
          The app concept received strong engagement during testing. Students appreciated the clean UI and reduced friction in applying to jobs. Future steps include refining algorithmic matching and expanding recruiter features.
        </p>
      </section>
    </div>
  );
}
