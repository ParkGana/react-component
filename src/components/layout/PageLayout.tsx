const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
