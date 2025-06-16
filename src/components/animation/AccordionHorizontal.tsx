import { useRef } from 'react';
import ComponentContainer from '../layout/ComponentContainer';

type AccordionType = {
  id: number;
  title: string;
  contents: string;
};

type AccordionHorizontalProps = {
  data: AccordionType[];
};

const AccordionHorizontal = ({ data }: AccordionHorizontalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<HTMLDivElement[]>([]);

  /* 마우스 Enter 이벤트 */
  const handleEnterItem = (index: number) => {
    const ratio = data.map((_, idx) => (idx === index ? '1fr' : 'fit-content(300px)'));

    if (containerRef.current && contentsRef.current) {
      containerRef.current.style.gridTemplateColumns = ratio.join(' ');
      contentsRef.current[index].style.display = 'block';
      data.map((_, idx) => idx !== index && (contentsRef.current[idx].style.display = 'none'));
    }
  };

  /* 마우스 Leave 이벤트 */
  const handleLeaveItem = (index: number) => {
    if (contentsRef.current) {
      setTimeout(() => {
        contentsRef.current[index].style.display = 'none';
      }, 500);
    }
  };

  /* 마우스 Leave 이벤트 (Container) */
  const handleLeaveContainer = () => {
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.gridTemplateColumns = `repeat(${data.length}, 1fr)`;
      }
    }, 500);
  };

  return (
    <ComponentContainer label="ACCORDION (H)">
      <div
        ref={containerRef}
        className="h-full min-h-[80px] grid gap-2"
        style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
        onMouseLeave={handleLeaveContainer}
      >
        {data.map(({ id, title, contents }, index) => (
          <div
            key={id}
            className="border-2 border-gray-400 p-2 cursor-pointer"
            onMouseEnter={() => handleEnterItem(index)}
            onMouseLeave={() => handleLeaveItem(index)}
          >
            <p className="text-body font-bold">{title}</p>
            <div
              ref={(element) => {
                contentsRef.current[index] = element!;
              }}
              className="overflow-hidden"
              style={{ display: 'none' }}
            >
              <p className="text-body pt-2">{contents}</p>
            </div>
          </div>
        ))}
      </div>
    </ComponentContainer>
  );
};

export default AccordionHorizontal;
