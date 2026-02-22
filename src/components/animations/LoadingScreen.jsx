import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const fullText = "<Hello World/>";
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let index = 0;
    const typingSpeed = 80;
    const completionDelay = 900;

    const interval = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));
      setProgress((index / fullText.length) * 100);

      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          document.body.style.overflow = "";
          onComplete();
        }, completionDelay);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-2 text-2xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[250px] h-[2px] bg-black/90 rounded overflow-hidden">
        <div
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-2 text-xs font-mono text-gray-400">
        {Math.round(progress)}%
      </div>
    </div>
  );
};
