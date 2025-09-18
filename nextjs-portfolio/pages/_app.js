// pages/_app.js
import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.45, ease: 'easeInOut' } },
  exit:    { opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } },
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  // Default site background (fallback if a page doesn't set one)
  const defaultBg =
    '#0D0D0D'

  // Per-page override: in a page file you can add: PageComponent.pageBg = '...'
  const pageBg = Component.pageBg || defaultBg

  return (
    <>
      {/* Keep the document stable and prevent overscroll "black" bounce */}
      <style jsx global>{`
        html, body, #__next { height: 100%; }
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overscroll-behavior: none;
          background: ${pageBg};            /* <- dynamic so no blue flash */
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}</style>

      {/* Stacking context so old/new pages can overlap during crossfade */}
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={router.asPath}
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'absolute',
              inset: 0,
              overflowY: 'auto',            // pages can scroll
              background: pageBg,           // <- matches body so no color peek-through
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              willChange: 'opacity',
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
