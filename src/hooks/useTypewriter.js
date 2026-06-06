import { useState, useEffect, useCallback } from 'react';

const professions = [
  'Web Developer',
  'Graphic Designer',
  'Photographer',
  'Editor Video & Foto',
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 1500;
const PAUSE_AFTER_DELETING = 400;

export function useTypewriter() {
  const [text, setText] = useState('');
  const [professionIndex, setProfessionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentProfession = professions[professionIndex];

  const handleTyping = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      if (text.length < currentProfession.length) {
        setText(currentProfession.slice(0, text.length + 1));
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, PAUSE_AFTER_TYPING);
      }
    } else {
      if (text.length > 0) {
        setText(currentProfession.slice(0, text.length - 1));
      } else {
        setIsDeleting(false);
        setProfessionIndex((prev) => (prev + 1) % professions.length);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), PAUSE_AFTER_DELETING);
      }
    }
  }, [text, isDeleting, isPaused, currentProfession]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting]);

  return { text, isDeleting, isPaused };
}

export default useTypewriter;
