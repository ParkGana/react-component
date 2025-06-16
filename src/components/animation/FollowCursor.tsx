import { useEffect, useState } from 'react';
import ComponentContainer from '../layout/ComponentContainer';

const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /* Mousemove 이벤트 */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById('follow-cursor-container');

      if (container) {
        setPosition({
          x: e.clientX - container.getBoundingClientRect().x,
          y: e.clientY - container.getBoundingClientRect().y
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ComponentContainer label="FOLLOW CURSOR">
      <div
        className="relative h-full min-h-[200px] border-2 border-gray-400 overflow-hidden"
        id="follow-cursor-container"
      >
        <div className="absolute inset-0">
          <div
            className="absolute w-10 h-10 rounded-full bg-gray-500"
            style={{ transform: `translateX(${position.x - 20}px) translateY(${position.y - 20}px)` }}
          />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default FollowCursor;
