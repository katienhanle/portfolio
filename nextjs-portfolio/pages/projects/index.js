import Link from 'next/link';
import Image from 'next/image';



export default function ProjectsPage() {
  
  return (
    <div style={{ background: 'linear-gradient(to bottom, #A9BCD0, #373F51)', color: 'white', minHeight: '100vh', padding: '2rem' }}>

      {/* Nav Bar */}
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
                underline.style.position = 'absolute';
                underline.style.bottom = '0';
                underline.style.left = '0';
                underline.style.height = '2px';
                underline.style.width = '100%';
                underline.style.backgroundColor = '#ffffff'; // ← brighter white underline
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

      {/* Title */}
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '4rem', textAlign: 'center' }}>Projects</h1>

      {/* Project Grid with 3 Columns */}
      <section style={{ padding: '4rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
          }}
        >
          {/* Left Column Project Card */}
          <Link href="/projects/imessage" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: '1.75rem' }}>iMessage Interface Revamp</h2>
                <p style={{ color: '#124157', margin: 0, fontStyle: 'italic' }}>UX Research · App Design</p>
                <p style={{ marginBottom: '1rem' }}>
                  Redesigned iMessage to improve feature discoverability and create a more intuitive user experience.
                </p>
              </div>
              <Image
                src="/phonedisplay.png"
                alt="iMessage Project"
                width={600}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
            />
            </div>
          </Link>

          {/* Middle Column Project Card */}
          <Link href="/projects/careercrush" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: '1.75rem' }}>Career Crush</h2>
                <p style={{ color: '#124157', margin: 0, fontStyle: 'italic' }}>UX Research · Product Design</p>
                <p style={{ marginBottom: '1rem' }}>
                  A swipe-based internship/job platform that simplifies the application process for students and recruiters.
                </p>
              </div>
              <Image
                src="/careercrushdisplay.png"
                alt="Career Crush Project"
                width={600}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
              />
            </div>
          </Link>

          <div></div>

          {/* Right Column Empty */}
          <div></div>
        </div>
      </section>
    </div>
  );
}