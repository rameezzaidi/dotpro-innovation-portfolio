import { useEffect, useState } from "react";

// Types a word, pauses, deletes it, then moves to the next one.
export default function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [len, setLen] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    setI(0);
    setLen(0);
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    const word = words[i % words.length] || "";
    if (reduce) {
      setLen(word.length);
      const t = setTimeout(() => setI((x) => x + 1), 2400);
      return () => clearTimeout(t);
    }
    let timer;
    if (!deleting && len < word.length) timer = setTimeout(() => setLen(len + 1), 70);
    else if (!deleting) timer = setTimeout(() => setDeleting(true), 1500);
    else if (len > 0) timer = setTimeout(() => setLen(len - 1), 35);
    else {
      setDeleting(false);
      setI((x) => x + 1);
    }
    return () => clearTimeout(timer);
  }, [words, i, len, deleting, reduce]);

  const word = words[i % words.length] || "";
  return (
    <span className="typed">
      {word.slice(0, len)}
      <span className="caret" />
    </span>
  );
}
