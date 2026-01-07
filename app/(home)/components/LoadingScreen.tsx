"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // Already visited this session, hide immediately
      setIsLoading(false);
      document.body.classList.remove('loading-active');
    } else {
      // Add class to hide content
      document.body.classList.add('loading-active');
      
      // Show loading screen for a fixed duration
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove('loading-active');
        sessionStorage.setItem('hasVisited', 'true');
      }, 2500); // 2.5 seconds

      return () => {
        clearTimeout(timer);
        document.body.classList.remove('loading-active');
      };
    }
    
    return () => {
      document.body.classList.remove('loading-active');
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          data-loading-screen
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col items-center"
          >
            {/* Miffy Image with tilting animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <motion.div
                animate={{
                  rotate: [-8, 8, -8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/Miffy.jpg"
                  alt="Miffy"
                  width={200}
                  height={200}
                  className="rounded-full"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-lg font-mono mb-8 text-purple-400"
              style={{ fontFamily: 'inherit' }}
            >
              waking up from my nap...
            </motion.p>

            {/* Cute decorative elements */}
            <motion.div
              className="mt-6 flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {['🍣', '🍜', '🍵'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  className="text-2xl"
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

