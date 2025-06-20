import { useEffect, useRef, useState } from 'react';
import ComponentContainer from '../layout/ComponentContainer';

type SectionType = {
  id: number;
  label: string;
};

type SwitchSectionProps = {
  data: SectionType[];
};

const SwitchSection = ({ data }: SwitchSectionProps) => {
  const now = useRef<number>(0);
  const isWheel = useRef<boolean>(true);

  const [sectionHeight, setSectionHeight] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);

  /* Resize 이벤트 */
  useEffect(() => {
    const handleResize = () => {
      const pageList = document.querySelectorAll('.switch-section-page');
      if (pageList) {
        setSectionHeight(pageList[0].clientHeight);
        setTranslateY(now.current * pageList[0].clientHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* 마우스 Wheel 이벤트 */
  useEffect(() => {
    const pageList = document.querySelectorAll('.switch-section-page');
    if (!pageList) return;

    const handleWheel = (e: any) => {
      const event = e as WheelEvent;
      event.preventDefault();

      if (isWheel.current) {
        isWheel.current = false;

        if (event.deltaY > 0) now.current++;
        else if (event.deltaY < 0) now.current--;

        if (now.current < 0) now.current = 0;
        else if (now.current > data.length - 1) now.current = data.length - 1;

        setTranslateY(now.current * sectionHeight);

        setTimeout(() => {
          isWheel.current = true;
        }, 500);
      }
    };

    pageList.forEach((item) => item.addEventListener('wheel', handleWheel, { passive: false }));
    return () => pageList.forEach((item) => item.removeEventListener('wheel', handleWheel));
  }, [sectionHeight, data.length]);

  return (
    <ComponentContainer label="SWITCH SECTION">
      <div className="relative w-full aspect-[3/2] border-2 border-gray-400 overflow-hidden">
        <div
          id="switch-section-container"
          className="relative w-full h-full transition duration-500"
          style={{ transform: `translateY(-${translateY}px)` }}
        >
          {data.map((section) => (
            <div
              key={section.id}
              className="switch-section-page w-full aspect-[3/2] flex items-center justify-center text-label"
            >
              {section.label}
            </div>
          ))}
        </div>
      </div>
    </ComponentContainer>
  );
};

export default SwitchSection;
