import HeroCanvas from "./HeroCanvas";
import HeroText from "./HeroText";

export default function Hero() {
    return (
        <section
            id="hero"
            className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-6
        mt-8
      "
        >
            {/* Background Glow */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          h-150
          w-150
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[150px]
        "
            />

            <div
                className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-2
        "
            >
                <HeroText />
                <HeroCanvas />
            </div>
        </section>
    );
}