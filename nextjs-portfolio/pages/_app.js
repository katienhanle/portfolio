import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}