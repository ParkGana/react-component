import { useRef } from 'react';
import ComponentContainer from './layout/ComponentContainer';

type RangebarVerticalProps = {
  range: { min: number; max: number };
  value: { min: number; max: number };
  step: number;
  handleMinChange: (value: number) => void;
  handleMaxChange: (value: number) => void;
};

const RangebarVertical = ({ range, value, step, handleMinChange, handleMaxChange }: RangebarVerticalProps) => {
  const rangeRef = useRef<HTMLDivElement>(null);

  const calculatePercent = (value: number) => ((value - range.min) / (range.max - range.min)) * 100;

  const handleMouseDown = (type: 'min' | 'max') => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!rangeRef.current) return;

      const rect = rangeRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;

      const percent = Math.max(0, Math.min(y, rect.height));
      const rawValue = range.max - (percent / rect.height) * (range.max - range.min);

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

  const minPercent = calculatePercent(value.min);
  const maxPercent = calculatePercent(value.max);

  return (
    <ComponentContainer label="RANGE BAR (V)">
      <div className="w-fit px-1 py-4 mx-auto">
        <div ref={rangeRef} className="relative w-6 h-full min-h-[200px] bg-gray-200 rounded-full">
          <div
            className="absolute w-full bg-gray-900"
            style={{ top: `${100 - maxPercent}%`, height: `${maxPercent - minPercent}%` }}
          />
          <div
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full border-4 border-gray-900 bg-white select-none"
            style={{ top: `${100 - maxPercent}%`, left: '50%', transform: 'translate(-50%, -50%)' }}
            onMouseDown={() => handleMouseDown('max')}
          >
            <p className="text-caption font-bold">{maxPercent}</p>
          </div>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full border-4 border-gray-900 bg-white select-none"
            style={{ top: `${100 - minPercent}%`, left: '50%', transform: 'translate(-50%, -50%)' }}
            onMouseDown={() => handleMouseDown('min')}
          >
            <p className="text-caption font-bold">{minPercent}</p>
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default RangebarVertical;
