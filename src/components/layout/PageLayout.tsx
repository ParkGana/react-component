const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-5">
      <div className="flex flex-col gap-20">{children}</div>
    </div>
  );
};

export default PageLayout;
