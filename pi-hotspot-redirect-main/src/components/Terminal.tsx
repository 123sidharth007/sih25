import { useState, useEffect } from "react";

interface TerminalProps {
  commands: string[];
  title?: string;
}

const Terminal = ({ commands, title = "terminal" }: TerminalProps) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) return;

    const command = commands[currentCommandIndex];
    let charIndex = 0;

    const typeCommand = () => {
      if (charIndex < command.length) {
        setCurrentText(command.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeCommand, 50 + Math.random() * 50);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentCommandIndex(prev => prev + 1);
          setCurrentText("");
          setIsTyping(true);
        }, 2000);
      }
    };

    typeCommand();
  }, [currentCommandIndex, commands]);

  return (
    <div className="terminal rounded-lg p-6 max-w-2xl mx-auto">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-terminal-green/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
        </div>
        <span className="text-terminal-green/70 text-sm font-mono ml-4">{title}</span>
      </div>
      
      {/* Terminal Content */}
      <div className="space-y-2 font-mono text-sm">
        {/* Previous commands */}
        {commands.slice(0, currentCommandIndex).map((cmd, index) => (
          <div key={index} className="text-terminal-green/80">
            <span className="text-terminal-blue">pi@raspberrypi:~$</span> {cmd}
          </div>
        ))}
        
        {/* Current typing command */}
        {currentCommandIndex < commands.length && (
          <div className="text-terminal-green">
            <span className="text-terminal-blue">pi@raspberrypi:~$</span> {currentText}
            {isTyping && <span className="animate-pulse">_</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;