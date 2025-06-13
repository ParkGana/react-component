type ComponentContainerProps = {
  label: string;
  children: React.ReactNode;
};

const ComponentContainer = ({ label, children }: ComponentContainerProps) => {
  return (
    <div className="flex flex-col gap-3 items-center border-4 border-gray-500 p-3">
      <p className="text-label">{label}</p>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default ComponentContainer;
