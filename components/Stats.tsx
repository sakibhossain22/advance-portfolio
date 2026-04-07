export default function Stats() {
  return (
    <div className="flex justify-center gap-16 md:gap-32 py-20 border-y border-white/5 backdrop-blur-sm bg-white/[0.02]">
      <StatItem label="Projects Completed" value="08" />
      <StatItem label="Happy Clients" value="01" />
      <StatItem label="Years Experience" value="2+" />
    </div>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="text-center space-y-2">
      <h4 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">
        {value}
      </h4>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
        {label}
      </p>
    </div>
  );
}