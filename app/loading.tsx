export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-slate-200 border-t-accent rounded-full animate-spin" />
        <p className="mt-4 text-text-secondary font-sans">Loading...</p>
      </div>
    </div>
  );
}
