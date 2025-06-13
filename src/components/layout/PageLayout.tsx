const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">{children}</div>
    </div>
  );
};

export default PageLayout;
