'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  pauseDurations?: number[];
  typingSpeed?: number;
  deletingSpeed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TypingEffect({
  texts,
  pauseDurations = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  className,
  style,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const currentPauseDuration = pauseDurations[currentIndex] || 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), currentPauseDuration);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, pauseDurations, typingSpeed, deletingSpeed]);

  return (
    <span className={className} style={style}>
      {displayText}
    </span>
  );
}
