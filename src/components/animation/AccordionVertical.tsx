import { useRef } from 'react';
import ComponentContainer from '../layout/ComponentContainer';

type AccordionType = {
  id: number;
  title: string;
  contents: string;
};

type AccordionVerticalProps = {
  data: AccordionType[];
};

const AccordionVertical = ({ data }: AccordionVerticalProps) => {
  const contentsRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement[]>([]);

  /* 마우스 Enter 이벤트 */
  const handleEnterItem = (index: number) => {
    if (contentsRef.current && textRef.current) {
      contentsRef.current[index].style.height = `${textRef.current[index].clientHeight}px`;
      data.map((_, idx) => idx !== index && (contentsRef.current[idx].style.height = '0'));
    }
  };

  /* 마우스 Leave 이벤트 */
  const handleLeaveItem = (index: number) => {
    if (contentsRef.current && textRef.current) {
      setTimeout(() => {
        contentsRef.current[index].style.height = '0';
      }, 500);
    }
  };

  return (
    <ComponentContainer label="ACCORDION (V)">
      <div className="flex flex-col gap-2">
        {data.map(({ id, title, contents }, index) => (
          <div
            key={id}
            className="border-2 border-gray-400 p-2 cursor-pointer"
            onMouseEnter={() => handleEnterItem(index)}
            onMouseLeave={() => handleLeaveItem(index)}
          >
            <p className="text-body font-bold">{title}</p>
            <div
              ref={(element: HTMLDivElement) => {
                contentsRef.current[index] = element;
              }}
              className="h-0 overflow-hidden"
            >
              <p
                ref={(element: HTMLDivElement) => {
                  textRef.current[index] = element;
                }}
                className="text-body pt-2"
              >
                {contents}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ComponentContainer>
  );
};

export default AccordionVertical;
