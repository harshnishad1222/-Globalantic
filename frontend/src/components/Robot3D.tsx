import React, { useRef, useEffect, useState } from 'react';

interface RobotProps {
  mousePosition: { x: number; y: number };
}

// Floating particles background
const FloatingParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Robot2D: React.FC<RobotProps> = ({ mousePosition }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [currentExpression, setCurrentExpression] = useState('happy');
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);
  
  const messages = [
    'Hello! I\'m your AI assistant!',
    'Ready to help you build the future!',
    'Let\'s create something amazing!',
    'Innovation starts here!',
    'Welcome to the digital age!'
  ];
  
  // Eye tracking calculations
  const eyeOffsetX = (mousePosition.x - 0.5) * 8;
  const eyeOffsetY = (mousePosition.y - 0.5) * 6;
  
  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000);
    
    return () => clearInterval(blinkInterval);
  }, []);
  
  // Random expressions
  useEffect(() => {
    const expressions = ['happy', 'curious', 'excited', 'thinking'];
    const expressionInterval = setInterval(() => {
      setCurrentExpression(expressions[Math.floor(Math.random() * expressions.length)]);
    }, 5000);
    
    return () => clearInterval(expressionInterval);
  }, []);
  
  // Floating animation
  useEffect(() => {
    if (robotRef.current) {
      robotRef.current.style.animation = 'float 3s ease-in-out infinite';
    }
  }, []);
  
  // Handle robot interaction
  const handleRobotClick = () => {
    setClickCount(prev => prev + 1);
    setShowMessage(true);
    setCurrentExpression('excited');
    
    setTimeout(() => {
      setShowMessage(false);
      setCurrentExpression('happy');
    }, 3000);
  };
  
  // Handle hover effects
  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentExpression('curious');
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentExpression('happy');
  };

  return (
    <div 
      ref={robotRef} 
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
      onClick={handleRobotClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Speech Bubble */}
      {showMessage && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-4 py-2 shadow-lg border-2 border-purple-200 animate-bounce z-10">
          <div className="text-sm font-medium text-gray-800">
            {messages[clickCount % messages.length]}
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      )}
      {/* Robot SVG */}
      <svg
        width="400"
        height="500"
        viewBox="0 0 400 500"
        className={`drop-shadow-2xl transform transition-all duration-300 ${
          isHovered ? 'scale-110 filter brightness-110' : 'scale-100'
        } ${clickCount > 0 ? 'animate-wiggle' : ''}`}
      >
        {/* Robot Shadow */}
        <ellipse cx="200" cy="480" rx="80" ry="15" fill="rgba(139, 92, 246, 0.3)" className="animate-pulse" />
        
        {/* Robot Body */}
        <rect x="120" y="200" width="160" height="200" rx="80" fill="url(#bodyGradient)" className="drop-shadow-lg" />
        
        {/* Body Panel */}
        <rect x="140" y="220" width="120" height="80" rx="15" fill="url(#panelGradient)" />
        
        {/* Chest Core */}
        <circle cx="200" cy="280" r="20" fill="url(#coreGradient)" className="animate-pulse">
          <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Arms */}
        <rect x="60" y="220" width="40" height="120" rx="20" fill="url(#armGradient)" 
              transform={`rotate(${Math.sin(Date.now() * 0.002) * 5} 80 280)`} />
        <rect x="300" y="220" width="40" height="120" rx="20" fill="url(#armGradient)" 
              transform={`rotate(${Math.sin(Date.now() * 0.002 + Math.PI) * 5} 320 280)`} />
        
        {/* Hands */}
        <circle cx="80" cy="360" r="25" fill="url(#handGradient)" />
        <circle cx="320" cy="360" r="25" fill="url(#handGradient)" />
        
        {/* Head */}
        <circle cx="200" cy="120" r="80" fill="url(#headGradient)" className="drop-shadow-xl" />
        
        {/* Head Band */}
        <rect x="130" y="100" width="140" height="20" rx="10" fill="url(#bandGradient)" />
        
        {/* Antennas */}
        <line x1="160" y1="60" x2="150" y2="20" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
        <line x1="240" y1="60" x2="250" y2="20" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
        <circle cx="150" cy="20" r="6" fill="#3b82f6" className="animate-pulse" />
        <circle cx="250" cy="20" r="6" fill="#3b82f6" className="animate-pulse" />
        
        {/* Screen Face */}
        <rect x="150" y="90" width="100" height="60" rx="15" fill="#1f2937" opacity="0.9" />
        
        {/* Eyes */}
        <circle 
          cx={170 + eyeOffsetX} 
          cy={115 + eyeOffsetY} 
          r={isBlinking ? "2" : "8"} 
          fill="#3b82f6" 
          className="transition-all duration-150"
        >
          <animate attributeName="fill" values="#3b82f6;#60a5fa;#3b82f6" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle 
          cx={230 + eyeOffsetX} 
          cy={115 + eyeOffsetY} 
          r={isBlinking ? "2" : "8"} 
          fill="#3b82f6" 
          className="transition-all duration-150"
        >
          <animate attributeName="fill" values="#3b82f6;#60a5fa;#3b82f6" dur="1s" repeatCount="indefinite" />
        </circle>
        
        {/* Eye Glow */}
        <circle cx={170 + eyeOffsetX} cy={115 + eyeOffsetY} r="12" fill="#3b82f6" opacity="0.3" />
        <circle cx={230 + eyeOffsetX} cy={115 + eyeOffsetY} r="12" fill="#3b82f6" opacity="0.3" />
        
        {/* Expression Lines */}
        {currentExpression === 'happy' && (
          <path d="M 180 135 Q 200 145 220 135" stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round" />
        )}
        {currentExpression === 'curious' && (
          <circle cx="200" cy="135" r="3" fill="#06b6d4" />
        )}
        {currentExpression === 'excited' && (
          <>
            <path d="M 180 135 Q 200 150 220 135" stroke="#06b6d4" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="185" cy="125" r="2" fill="#fbbf24" className="animate-pulse" />
            <circle cx="215" cy="125" r="2" fill="#fbbf24" className="animate-pulse" />
          </>
        )}
        {currentExpression === 'thinking' && (
          <>
            <ellipse cx="200" cy="135" rx="8" ry="3" fill="none" stroke="#06b6d4" strokeWidth="2" />
            <circle cx="220" cy="110" r="2" fill="#06b6d4" className="animate-pulse" />
            <circle cx="225" cy="105" r="1.5" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '0.2s'}} />
            <circle cx="230" cy="100" r="1" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '0.4s'}} />
          </>
        )}
        
        {/* Status Indicators */}
        <circle cx="160" cy="250" r="4" fill="#10b981" className="animate-pulse" />
        <circle cx="180" cy="250" r="4" fill="#f59e0b" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        <circle cx="200" cy="250" r="4" fill="#ef4444" className="animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="panelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="bandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <radialGradient id="coreGradient">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </radialGradient>
          <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <radialGradient id="handGradient">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={`absolute text-xs font-mono transition-all duration-300 ${
              isHovered ? 'text-purple-400 opacity-80' : 'text-blue-400 opacity-60'
            }`}
            style={{
              left: `${15 + (i * 8)}%`,
              top: `${25 + (i % 4) * 15}%`,
              animation: `dataFlow ${2 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {['01', '10', '11', '00', 'AI', 'ML', 'IoT', 'API', 'GPU', 'CPU', 'RAM', 'SSD'][i]}
          </div>
        ))}
      </div>
      
      {/* Performance Metrics */}
      {isHovered && (
        <div className="absolute bottom-4 left-4 bg-black/80 rounded-lg p-3 text-white text-xs font-mono animate-fade-in">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>System Online</span>
          </div>
          <div>CPU: {Math.floor(Math.random() * 30 + 70)}%</div>
          <div>Memory: {Math.floor(Math.random() * 20 + 45)}%</div>
          <div>Neural Net: Active</div>
        </div>
      )}
      
      {/* Floating Atom */}
      <div className={`absolute top-10 right-10 w-16 h-16 transition-all duration-300 ${
        isHovered ? 'animate-spin scale-125' : 'animate-spin scale-100'
      }`} style={{animationDuration: isHovered ? '4s' : '8s'}}>
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-30"></div>
          <div className="absolute inset-2 border-2 border-purple-400 rounded-full opacity-40 animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}></div>
          <div className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse ${
            isHovered ? 'bg-purple-500' : 'bg-blue-500'
          }`}></div>
          <div className={`absolute top-0 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 animate-pulse ${
            isHovered ? 'bg-purple-400' : 'bg-cyan-400'
          }`}></div>
          <div className={`absolute bottom-0 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 animate-pulse ${
            isHovered ? 'bg-purple-400' : 'bg-cyan-400'
          }`}></div>
        </div>
      </div>
      
      {/* Background Particles */}
      <FloatingParticles />
    </div>
  );
};

const Robot3D: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full relative">
      <Robot2D mousePosition={mousePosition} />
    </div>
  );
};

export default Robot3D;