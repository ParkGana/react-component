import { useEffect, useState, type DragEvent } from 'react';
import ComponentContainer from '../layout/ComponentContainer';

type ImagePuzzleProps = {
  size: number;
};

const ImagePuzzle = ({ size }: ImagePuzzleProps) => {
  const [randomPuzzle, setRandomPuzzle] = useState<number[]>([]);
  const [moved, setMovied] = useState({ id: '', src: '' });

  useEffect(() => {
    const generateRandomArray = () => {
      const arr: number[] = [];

      while (arr.length < size * size) {
        const random = Math.floor(Math.random() * (size * size)) + 1;
        if (!arr.includes(random)) arr.push(random);
      }

      return arr;
    };

    setRandomPuzzle(generateRandomArray());
  }, []);

  /* 마우스 Drag 이벤트 */
  const handleDragPiece = (e: DragEvent<HTMLImageElement>) => {
    setMovied({ id: e.currentTarget.id, src: e.currentTarget.src });
  };

  /* 마우스 Drop 이벤트 */
  const handleDropPiece = (e: DragEvent<HTMLImageElement>) => {
    const move = document.getElementById(moved.id);
    const target = document.getElementById(e.currentTarget.id);

    const movePiece = move as HTMLImageElement;
    const targetPiece = target as HTMLImageElement;

    if (movePiece && targetPiece) {
      movePiece.src = e.currentTarget.src;
      targetPiece.src = moved.src;
    }
  };

  return (
    <ComponentContainer label="IMAGE PUZZLE">
      <div className="flex flex-wrap">
        {randomPuzzle.map((num) => (
          <img
            key={num}
            id={`puzzle-${num}`}
            src={`/images/puzzle-${num}.png`}
            className="w-1/2"
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
