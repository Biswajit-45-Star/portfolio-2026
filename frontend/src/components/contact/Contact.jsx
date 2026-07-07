import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 text-center">
                    <span
                        className="
              rounded-full
              border border-(--primary)
              bg-cyan-500/10
              px-4 py-2
              text-sm
              text-(--primary)
            "
                    >
                        Let's Connect
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-6xl">
                        Let's Build Something
                        <span
                            className="
                            bg-(--primary)
                bg-clip-text
                text-transparent
              "
                        >
                            {" "}Amazing
                        </span>
                    </h2>

                    <p className="mt-5 text-base text-slate-400 sm:text-lg">
                        Open to Frontend, MERN Stack and
                        React Native opportunities.
                    </p>
                </div>

                <div
                    className="grid gap-8 lg:grid-cols-2 lg:gap-10"
                >
                    {/* Left Side */}
                    <div
                        className="
              rounded-3xl
              border
              border-white/10
              bg-white/3
              p-6
              sm:p-8
              backdrop-blur-xl
            "
                    >
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                            Contact Information
                        </h3>

                        <div className="mt-8 space-y-6">

                            <div className="flex items-center gap-4">
                                <div
                                    className="
                    rounded-xl
                    bg-violet-500/10
                    p-3
                  "
                                >
                                    <Mail className="text-violet-400" />
                                </div>

                                <div>
                                    <p className="text-slate-400">
                                        Email
                                    </p>

                                    <p className="text-white">
                                        work.biswajitsahu@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div
                                    className="
                    rounded-xl
                    bg-cyan-500/10
                    p-3
                  "
                                >
                                    <MapPin className="text-cyan-400" />
                                </div>

                                <div>
                                    <p className="text-slate-400">
                                        Location
                                    </p>

                                    <p className="text-white">
                                        Bhubaneswar, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div
                                    className="
                    rounded-xl
                    bg-emerald-500/10
                    p-3
                  "
                                >
                                    <Phone className="text-emerald-400" />
                                </div>

                                <div>
                                    <p className="text-slate-400">
                                        Availability
                                    </p>

                                    <p className="text-white">
                                        Open To Relocate
                                    </p>
                                </div>
                            </div>
                        </div>

                      <div
    className="
        mt-10
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-black/20
    "
>
    {/* Map Area */}
    <div
        className="
            relative
            flex
            h-52
            items-center
            justify-center
            bg-linear-to-br
            from-slate-900
            via-slate-800
            to-slate-900
        "
    >
        {/* Grid Pattern */}
        <div
            className="
                absolute
                inset-0
                opacity-20
                bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
            "
        />

        {/* Pulse Marker */}
        <div className="relative">
            <span
                className="
                    absolute
                    inset-0
                    animate-ping
                    rounded-full
                    bg-(--primary)
                    opacity-30
                "
            />

            <div
                className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-(--primary)
                    text-white
                    shadow-lg
                "
            >
                📍
            </div>
        </div>

        {/* Location Label */}
        <div
            className="
                absolute
                bottom-4
                left-4
                rounded-xl
                border
                border-white/10
                bg-black/40
                px-4
                py-2
                backdrop-blur-xl
            "
        >
            <p className="text-xs text-slate-400">
                Current Location
            </p>

            <p className="font-medium text-white">
                Bhubaneswar, Odisha, India
            </p>
        </div>
    </div>

    {/* Footer */}
    <div className="p-5">
        <p className="text-slate-300">
            Based in <span className="text-(--primary)">Bhubaneswar</span>,
            open to relocation and opportunities across India.
        </p>
    </div>
</div>
                    </div>

                    {/* Right Side */}
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}