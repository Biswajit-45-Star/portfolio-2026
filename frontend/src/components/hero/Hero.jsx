import HeroCanvas from "./HeroCanvas";
import HeroText from "./HeroText";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-28"
        >
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px] sm:h-[34rem] sm:w-[34rem]" />

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                <HeroText />
                <HeroCanvas />
            </div>
        </section>
    );
}