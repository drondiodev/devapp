export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-[1100px] max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
}
