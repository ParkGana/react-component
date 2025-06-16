import { useRef } from 'react';
import ComponentContainer from '../layout/ComponentContainer';

type RangebarHorizontalProps = {
  range: { min: number; max: number };
  value: { min: number; max: number };
  step: number;
  handleMinChange: (value: number) => void;
  handleMaxChange: (value: number) => void;
};

const RangebarHorizontal = ({ range, value, step, handleMinChange, handleMaxChange }: RangebarHorizontalProps) => {
  const rangeRef = useRef<HTMLDivElement>(null);

  const minPercent = ((value.min - range.min) / (range.max - range.min)) * 100;
  const maxPercent = ((value.max - range.min) / (range.max - range.min)) * 100;

  /* 마우스 이벤트 */
  const handleMouseDown = (type: 'min' | 'max') => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!rangeRef.current) return;

      const rect = rangeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;

      const percent = Math.max(0, Math.min(x, rect.width));
      const rawValue = range.min + (percent / rect.width) * (range.max - range.min);

      const stepped = Math.round(rawValue / step) * step;
      const clamped = Math.max(range.min, Math.min(stepped, range.max));

      type === 'min' && clamped < value.max && handleMinChange(clamped);
      type === 'max' && clamped > value.min && handleMaxChange(clamped);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <ComponentContainer label="RANGE BAR (H)">
      <div className="px-4 py-1">
        <div ref={rangeRef} className="relative w-full h-6 rounded-full bg-gray-200">
          <div
            className="absolute h-full bg-gray-900"
            style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
          />
          <div
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full border-4 border-gray-900 bg-white select-none"
            style={{ left: `${minPercent}%` }}
            onMouseDown={() => handleMouseDown('min')}
          >
            <p className="text-caption font-bold">{minPercent}</p>
          </div>
          <div
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full border-4 border-gray-900 bg-white select-none"
            style={{ left: `${maxPercent}%` }}
            onMouseDown={() => handleMouseDown('max')}
          >
            <p className="text-caption font-bold">{maxPercent}</p>
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default RangebarHorizontal;
