import Image from "next/image";

export default function Header({
  lastUpdate,
  updateStatus,
}) {
  const isWaiting =
    updateStatus?.toString().toLowerCase().includes("waiting");

  return (
    <header
      className="
        relative
        overflow-hidden
        h-[240px]
        sm:h-[320px]
        md:h-[450px]
        lg:h-[560px]
        xl:h-[620px]
      "
    >
      {/* Banner */}
      <Image
        src="/banner/nucat.jpg"
        alt="Nuca"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-center
          transition-transform
          duration-700
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/55
          to-black/10
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-0
          flex
          items-end
        "
      >
        <div className="w-full max-w-7xl mx-auto px-5 md:px-8 pb-6 md:pb-10">
          {/* Title */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-black
              leading-none
              tracking-tight
              text-white
            "
          >
            NUCHART STREAMS
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-3
              text-sm
              sm:text-base
              md:text-lg
              text-zinc-300
            "
          >
            Spotify Statistics Dashboard
          </p>

          {/* Badge */}
          <div className="flex flex-wrap gap-3 mt-5">
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-zinc-900/50
                backdrop-blur-md
                border
                border-zinc-700
                text-xs
                sm:text-sm
                text-zinc-200
              "
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {lastUpdate}
            </div>

            {isWaiting && (
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-amber-500/10
                  border
                  border-amber-500/30
                  text-amber-300
                  text-xs
                  sm:text-sm
                  animate-pulse
                "
              >
                <span>⏳</span>
                Waiting Update
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}