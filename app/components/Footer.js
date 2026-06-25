export default function Footer() {
  return (
    <footer
      className="
        relative
        mt-16
        border-t
        border-zinc-800
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-500/[0.02]
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        
        <div className="flex flex-col items-center justify-center text-center gap-6">

          {/* Brand */}
          <div className="space-y-1">
            <h3
              className="
                text-sm
                md:text-base
                font-semibold
                tracking-wide
                text-zinc-200
              "
            >
              NUCHART STREAMS
            </h3>

            <p
              className="
                text-xs
                text-zinc-500
              "
            >
              © 2026 Nuchart.id
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}