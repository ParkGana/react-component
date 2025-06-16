import React from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ComponentContainer from '../layout/ComponentContainer';
import clsx from 'clsx';

type CardType = {
  id: number;
  label: string;
};

type SortableListProps = {
  data: CardType[];
  handleSort: React.Dispatch<React.SetStateAction<CardType[]>>;
};

const SortableCard = ({ data }: { data: CardType }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: data.id });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        'flex items-center justify-center text-body font-bold border-2 border-gray-400 rounded-md bg-white p-5 cursor-grab',
        isDragging ? 'opacity-50 shadow-md' : 'opacity-100 shadow-none'
      )}
      style={{ transition, transform: CSS.Transform.toString(transform) }}
      {...attributes}
      {...listeners}
    >
      {data.label}
    </div>
  );
};

const SortableList = ({ data, handleSort }: SortableListProps) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (over && active.id !== over.id) {
      const oldIndex = data.findIndex((c) => c.id === active.id);
      const newIndex = data.findIndex((c) => c.id === over.id);
      handleSort(arrayMove(data, oldIndex, newIndex));
    }
  };

  return (
    <ComponentContainer label="SORTABLE LIST">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={data.map((card) => card.id)} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-3 gap-3">
            {data.map((card) => (
              <SortableCard key={card.id} data={card} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </ComponentContainer>
  );
};

export default SortableList;
