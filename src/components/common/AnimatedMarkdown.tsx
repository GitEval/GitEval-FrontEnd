import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface AnimatedMarkdownProps {
  content: string;
  speed?: number;
}

const AnimatedMarkdown: React.FC<AnimatedMarkdownProps> = ({ content, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  const formattedContent = content.replace(/\n/g, '  \n');

  useEffect(() => {
    if (index < formattedContent.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + formattedContent[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, formattedContent, speed]);

  return (
    <div className="p-4 text-gray-700 w-[40vw]">
      <ReactMarkdown>{displayText}</ReactMarkdown>
    </div>
  );
};

export default AnimatedMarkdown;
