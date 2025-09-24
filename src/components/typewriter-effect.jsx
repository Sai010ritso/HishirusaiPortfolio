"use client";
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ words, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const text = typeof currentWord === 'string' ? currentWord : currentWord.text;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
          setTypeSpeed(100);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1));
          setTypeSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed]);

  const currentWord = words[currentWordIndex];
  const wordClassName = typeof currentWord === 'object' ? currentWord.className : '';

  return (
    <span className={`${wordClassName} ${className} [font-family:nebulax] font-black text-white`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export function TypewriterEffectDemo({ className = "text-7xl" }) {
  const words = [
    {
      text: "Creative",
    },
    {
      text: "Awesome",
    },
    {
      text: "Visual",
    },
    {
      text: "Innovative",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffect words={words} className={className} />
    </div>
  );
}
