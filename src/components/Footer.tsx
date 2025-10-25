export function Footer() {
  return (
    <footer className="py-12 px-6 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#94A3B8] text-center md:text-left">
            <p>© Buildables 2025 — Built by Overhaul</p>
          </div>
          
          <div className="text-sm text-[#94A3B8] text-center md:text-right">
            <p className="italic">"Let's make hardware lovable again."</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
