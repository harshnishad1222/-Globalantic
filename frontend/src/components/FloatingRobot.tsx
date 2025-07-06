import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CursorState {
  x: number;
  y: number;
  isClicking: boolean;
  isHovering: boolean;
  velocity: { x: number; y: number };
}

const FloatingRobot: React.FC = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isClicking: false,
    isHovering: false,
    velocity: { x: 0, y: 0 }
  });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [robotState, setRobotState] = useState<'idle' | 'active' | 'excited'>('idle');
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  const updateCursor = useCallback((e: MouseEvent) => {
    const newX = e.clientX;
    const newY = e.clientY;
    
    // Calculate velocity
    const velocity = {
      x: newX - lastPositionRef.current.x,
      y: newY - lastPositionRef.current.y
    };
    
    const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
    
    // Determine robot state based on movement
    let newState: 'idle' | 'active' | 'excited' = 'idle';
    if (speed > 10) newState = 'excited';
    else if (speed > 2) newState = 'active';
    
    // Check if hovering over interactive elements
    const element = document.elementFromPoint(newX, newY);
    const isHovering = element && (
      element.tagName === 'BUTTON' ||
      element.tagName === 'A' ||
      element.closest('button') ||
      element.closest('a') ||
      element.classList.contains('cursor-pointer')
    );

    setCursor(prev => ({
      ...prev,
      x: newX,
      y: newY,
      velocity,
      isHovering: !!isHovering
    }));
    
    setRobotState(newState);
    
    // Add trail point
    if (speed > 1) {
      setTrail(prev => [...prev.slice(-8), { x: newX, y: newY, id: Date.now() }]);
    }
    
    lastPositionRef.current = { x: newX, y: newY };
  }, []);

  const handleMouseDown = useCallback(() => {
    setCursor(prev => ({ ...prev, isClicking: true }));
  }, []);

  const handleMouseUp = useCallback(() => {
    setCursor(prev => ({ ...prev, isClicking: false }));
  }, []);

  useEffect(() => {
    // Comprehensive cursor hiding with multiple approaches
    const style = document.createElement('style');
    style.id = 'robot-cursor-style';
    style.textContent = `
      html, html *, body, body *, *:not(#robot-cursor), *:not(#robot-cursor) * {
        cursor: none !important;
        -webkit-cursor: none !important;
        -moz-cursor: none !important;
      }
      html {
        cursor: none !important;
      }
      body {
        cursor: none !important;
      }
      input, textarea, select, button, a {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);
    
    // Force cursor hiding on document elements
    document.body.style.setProperty('cursor', 'none', 'important');
    document.documentElement.style.setProperty('cursor', 'none', 'important');
    
    // Continuous cursor hiding
    const hideAllCursors = () => {
      document.querySelectorAll('*').forEach(el => {
        const element = el as HTMLElement;
        element.style.setProperty('cursor', 'none', 'important');
      });
    };
    
    // Initial hide and continuous monitoring
    hideAllCursors();
    const observer = new MutationObserver(() => {
      hideAllCursors();
      document.body.style.setProperty('cursor', 'none', 'important');
      document.documentElement.style.setProperty('cursor', 'none', 'important');
    });
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true, 
      attributeFilter: ['style', 'class'] 
    });
    
    // Periodic cursor hiding as backup
    const cursorHideInterval = setInterval(() => {
      document.body.style.setProperty('cursor', 'none', 'important');
      document.documentElement.style.setProperty('cursor', 'none', 'important');
    }, 100);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      const existingStyle = document.getElementById('robot-cursor-style');
      if (existingStyle) document.head.removeChild(existingStyle);
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
      observer.disconnect();
      clearInterval(cursorHideInterval);
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [updateCursor, handleMouseDown, handleMouseUp]);

  // Clean up trail
  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrail(prev => prev.filter(point => Date.now() - point.id < 800));
    }, 100);
    return () => clearInterval(cleanup);
  }, []);

  const getRobotScale = () => {
    if (cursor.isClicking) return 0.12;
    if (cursor.isHovering) return 0.18;
    if (robotState === 'excited') return 0.16;
    return 0.15;
  };

  const getRobotRotation = () => {
    const speed = Math.sqrt(cursor.velocity.x ** 2 + cursor.velocity.y ** 2);
    if (speed > 5) {
      return Math.atan2(cursor.velocity.y, cursor.velocity.x) * (180 / Math.PI);
    }
    return 0;
  };

  const getEyeColor = () => {
    if (cursor.isClicking) return '#ef4444';
    if (cursor.isHovering) return '#10b981';
    if (robotState === 'excited') return '#f59e0b';
    return '#3b82f6';
  };

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${point.x - 2}px`,
            top: `${point.y - 2}px`,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length * 0.8})`,
          }}
        >
          <div className="w-1 h-1 bg-purple-400 rounded-full" />
        </div>
      ))}

      {/* Robot Cursor */}
      <div
        className="fixed z-[10000] pointer-events-none select-none"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
          transform: `translate(-50%, -50%) scale(${getRobotScale()}) rotate(${getRobotRotation()}deg)`,
          transition: cursor.isClicking ? 'none' : 'transform 0.1s ease-out',
        }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-2xl">
          {/* Robot Body */}
          <circle 
            cx="100" 
            cy="120" 
            r="35" 
            fill="url(#bodyGrad)" 
            className={cursor.isClicking ? 'animate-pulse' : ''}
          />
          
          {/* Robot Head */}
          <circle 
            cx="100" 
            cy="70" 
            r="40" 
            fill="url(#headGrad)"
            className={robotState === 'excited' ? 'animate-pulse' : ''}
          />
          
          {/* Antennas */}
          <line x1="80" y1="40" x2="75" y2="20" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
          <line x1="120" y1="40" x2="125" y2="20" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
          <circle cx="75" cy="20" r="4" fill="#3b82f6" className="animate-pulse" />
          <circle cx="125" cy="20" r="4" fill="#3b82f6" className="animate-pulse" />
          
          {/* Screen Face */}
          <rect x="75" y="55" width="50" height="30" rx="8" fill="#1f2937" opacity="0.9" />
          
          {/* Dynamic Eyes */}
          <circle cx="85" cy="65" r={cursor.isClicking ? "6" : "4"} fill={getEyeColor()}>
            {robotState === 'excited' && (
              <animate attributeName="r" values="4;6;4" dur="0.5s" repeatCount="indefinite" />
            )}
          </circle>
          <circle cx="115" cy="65" r={cursor.isClicking ? "6" : "4"} fill={getEyeColor()}>
            {robotState === 'excited' && (
              <animate attributeName="r" values="4;6;4" dur="0.5s" repeatCount="indefinite" />
            )}
          </circle>
          
          {/* Expression */}
          {cursor.isHovering && (
            <path d="M 90 75 Q 100 80 110 75" stroke="#10b981" strokeWidth="2" fill="none" />
          )}
          {cursor.isClicking && (
            <circle cx="100" cy="75" r="2" fill="#ef4444" />
          )}
          
          {/* Arms */}
          <rect 
            x="60" 
            y="110" 
            width="20" 
            height="6" 
            rx="3" 
            fill="#8b5cf6"
            transform={`rotate(${cursor.isClicking ? '15' : robotState === 'excited' ? '10' : '0'} 70 113)`}
          />
          <rect 
            x="120" 
            y="110" 
            width="20" 
            height="6" 
            rx="3" 
            fill="#8b5cf6"
            transform={`rotate(${cursor.isClicking ? '-15' : robotState === 'excited' ? '-10' : '0'} 130 113)`}
          />
          
          {/* Status Light */}
          <circle 
            cx="100" 
            cy="130" 
            r="3" 
            fill={cursor.isClicking ? '#ef4444' : cursor.isHovering ? '#10b981' : '#9ca3af'}
            className="animate-pulse"
          />
          
          {/* Click Ripple Effect */}
          {cursor.isClicking && (
            <circle cx="100" cy="100" r="50" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.6">
              <animate attributeName="r" values="50;80;50" dur="0.3s" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="0.3s" />
            </circle>
          )}
          
          {/* Gradients */}
          <defs>
            <radialGradient id="headGrad">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </radialGradient>
            <radialGradient id="bodyGrad">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </radialGradient>
          </defs>
        </svg>
        
        {/* State Indicator */}
        {cursor.isHovering && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-green-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
              Click me!
            </div>
          </div>
        )}
        
        {cursor.isClicking && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-red-500 text-white px-2 py-1 rounded text-xs">
              Clicking!
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingRobot;