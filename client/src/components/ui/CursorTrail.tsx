import { useEffect } from 'react';

export const CursorTrail = () => {
  useEffect(() => {
    const createTrail = (x: number, y: number) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      document.body.appendChild(trail);

      // Elimina el trail después de que se desvanece
      setTimeout(() => {
        trail.remove();
      }, 600);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createTrail(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null; 
};
