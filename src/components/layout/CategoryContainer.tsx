type CategoryContainerProps = {
  category: string;
  children: React.ReactNode;
};

const CategoryContainer = ({ category, children }: CategoryContainerProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-title text-center">{category}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">{children}</div>
    </div>
  );
};

export default CategoryContainer;
