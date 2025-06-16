import { useCallback, useEffect, useState, type DragEvent } from 'react';
import ComponentContainer from '../layout/ComponentContainer';

type ImagePuzzleProps = {
  size: number;
};

const ImagePuzzle = ({ size }: ImagePuzzleProps) => {
  let moveId: string;
  let moveSrc: string;

  const [randomPuzzle, setRandomPuzzle] = useState<number[]>([]);

  useEffect(() => {
    setRandomPuzzle(generateRandomArray());
  }, []);

  /* drag 이벤트 */
  const handleDragPiece = (e: DragEvent<HTMLImageElement>) => {
    moveId = e.currentTarget.id;
    moveSrc = e.currentTarget.src;
  };

  /* drop 이벤트 */
  const handleDropPiece = (e: DragEvent<HTMLImageElement>) => {
    const move = document.getElementById(moveId);
    const target = document.getElementById(e.currentTarget.id);

    const movePiece = move as HTMLImageElement;
    const targetPiece = target as HTMLImageElement;

    if (movePiece && targetPiece) {
      movePiece.src = e.currentTarget.src;
      targetPiece.src = moveSrc;
    }
  };

  /* 랜덤 배열 생성 */
  const generateRandomArray = useCallback(() => {
    const arr: number[] = [];

    while (arr.length < size * size) {
      const random = Math.floor(Math.random() * (size * size)) + 1;
      if (!arr.includes(random)) arr.push(random);
    }

    return arr;
  }, []);

  return (
    <ComponentContainer label="IMAGE PUZZLE">
      <div className="flex flex-wrap">
        {randomPuzzle.map((num) => (
          <img
            key={num}
            className="w-1/2"
            src={`/images/puzzle-${num}.png`}
            id={`puzzle-${num}`}
            onDragStart={(e) => handleDragPiece(e)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDropPiece(e)}
          />
        ))}
      </div>
    </ComponentContainer>
  );
};

export default ImagePuzzle;
