import { useEffect, useState } from 'react';

const useTypingEffect = (phrases) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(false);
    const [displayText, setDisplayText] = useState('');
  
    const maxPhraseLength = Math.max(...phrases.map((phrase) => phrase.length));
  
    useEffect(() => {
      const currentPhrase = phrases[currentPhraseIndex];
  
      setDisplayText(
        currentPhrase.slice(0, currentCharIndex) +
          (blink && !isDeleting ? '_' : '') +
          '\u2003'.repeat(maxPhraseLength - currentCharIndex) // Padding for consistency
      );
  
      const timer = setTimeout(() => {
        if (!isDeleting) {
          if (currentCharIndex < currentPhrase.length) {
            setCurrentCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          if (currentCharIndex > 0) {
            setCurrentCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      }, isDeleting ? 50 : 100);
  
      const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
  
      return () => {
        clearTimeout(timer);
        clearInterval(blinkInterval);
      };
    }, [currentCharIndex, isDeleting, blink, currentPhraseIndex, phrases, maxPhraseLength]);
  
    return displayText;
  };

 
  
  
export default useTypingEffect;
