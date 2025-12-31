export const LiveBadge = () => {
  return (
    <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md border border-green-500/30 px-4 py-1.5 rounded-full">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
      </span>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400">
        Digital Suite • Live
      </span>
    </div>
  );
};