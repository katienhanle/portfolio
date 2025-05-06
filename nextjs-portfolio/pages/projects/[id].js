import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';



export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{
        background: 'linear-gradient(to top, #373F51, #A9BCD0)',
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

      {/* Title Section */}
      <section style={{ marginTop: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>iMessage Interface Revamp</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '2rem',
          alignItems: 'flex-start',
          marginTop: '2rem',
          maxWidth: '1200px',
          marginInline: 'auto'
        }}>
          {/* TLDR + Metadata */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontWeight: 'bold' }}>TLDR:</h3>
              <p>
                Our project aimed to identify and address common user errors within Apple&rsquo;s iMessage app. 
                By conducting interviews with 18 university students, we pinpointed issues such as the 
                discoverability of recently deleted messages, confusion between dictation and voice memo 
                functions, and inconsistent gesture actions. Our redesigned features included improved 
                signifiers for deleted messages, a drop-up menu for the microphone button, and a gear icon 
                on the home screen for heightened discoverability. We also added a customization menu to 
                enhance user experience without increasing complexity. These changes aim to make iMessage 
                more intuitive and user-friendly.
              </p>
            </div>
            <div style={{ lineHeight: '2' }}>
              <p><strong>Client:</strong><br />iMessage Users</p>
              <p><strong>My Role:</strong><br />UX/UI Design</p>
              <p><strong>Timeline:</strong><br />March 2024</p>
            </div>
          </div>

          {/* Image */}
          <div style={{ justifySelf: 'start' }}>
          <Image
            src="/phonedisplay.png"
            alt="iMessage Project"
            width={360}
            height={720} // Adjust this to match your image’s real aspect ratio
            style={{ width: '100%', maxWidth: '360px', borderRadius: '1rem', height: 'auto' }}
            />
          </div>
        </div>
      </section>

    {/* Challenge */}
    <section style={{ marginTop: '4rem', maxWidth: '800px', marginInline: 'auto', textAlign: 'left' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Challenge</h2>
    <p style={{ marginTop: '1rem' }}>
        Our project focused on analyzing user interactions with iMessage among students at the University 
        of California San Diego. Despite its popularity, iMessage presented several usability challenges 
        among our participants. Given the time constraints, we took a rapid prototyping approach. Our 
        project aimed to make iMessage more intuitive and user-friendly, benefitting both Apple and iMessage users.
    </p>
    </section>

    {/* User Research */}
    <section style={{ marginTop: '4rem', maxWidth: '800px', marginInline: 'auto', textAlign: 'left' }}>
    <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>User Research</h2>
    <p>
        To gauge how iMessage users navigated the application, our team observed 18 UCSD students. 
        Among these students, we noticed the following patterns:
    </p>
    <ul style={{ listStyleType: 'disc', marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.7', textAlign: 'left' }}>
        <li>Many of the iMessage features seemed to be hidden, leaving our users uncertain of how to perform certain tasks.</li>
        <li>When users did not know how to perform a task, users would swipe left and right on a message log.</li>
        <li>Poorly designed buttons led to confusion, setting the wrong expectations.</li>
    </ul>
    </section>

    {/* Bar Chart Image */}
    <section style={{ marginTop: '3rem', textAlign: 'center', maxWidth: '800px', marginInline: 'auto' }}>
        <p>(Images inserted later!)</p>
        <p>...</p>

    <p>
        Based on these observations, we established the following goals for the redesign:
    </p>
    <ul style={{ listStyleType: 'disc', marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.7', textAlign: 'left' }}>
        <li>Enhance clarity and user understanding of microphone icon.</li>
        <li>Simplify the user interface by replacing ambiguous icons with more recognizable symbols.</li>
        <li>Improve the clarity of features for function.</li>
    </ul>
    </section>

    {/* Solution Section */}
    <section style={{ marginTop: '6rem', textAlign: 'center' }}>
    <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Solution</h2>

    {/* Microphone Function */}
    <div style={{ marginTop: '3rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Microphone Function</h3>
        <p style={{ marginTop: '1rem' }}>
        One of the primary challenges observed was the confusion between dictation and voice memo functions, both
        represented by a microphone icon. We designed a drop-up menu that appears when the microphone button is
        pressed, allowing users to choose between dictation and sending a voice memo.
        </p>
    </div>
    
    <p>...</p>
        <p>(Images inserted later!)</p>

    {/* Recently Deleted Messages */}
    <div style={{ marginTop: '6rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Recently Deleted Messages</h3>
        <p style={{ marginTop: '1rem' }}>
        The first challenge was the difficulty in discovering the “recently deleted messages” feature. Many users (15 out
        of 18) were unaware that the function existed at all, so we proposed a confirmation screen that notifies users
        about this feature after deleting a message, improving its discoverability and ensuring users know deleted messages
        can be restored within 30 days.
        </p>
    </div>

    {/* Message Log Action Sheet */}
    <div style={{ marginTop: '4rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Message Log Action Sheet</h3>
        <p style={{ marginTop: '1rem' }}>
        We also enhanced the iMessage home screen by replacing the ambiguous “Edit” button with a more recognizable
        settings icon, reducing knowledge-based errors and improving feature discoverability. To further enhance user
        experience, we added a customization menu with options to change the color theme, select notification contacts,
        and adjust sound settings. These features aimed to enhance engagement without adding complexity.
        </p>
    </div>
    </section>


    </div>
  );
}
