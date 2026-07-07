import ExperienceCounter from "./ExperienceCounter";

const stats = [
    {
        number: 1.5,
        suffix: "+",
        label: "Years Experience",
    },
    {
        number: 10,
        suffix: "+",
        label: "Projects Built",
    },
    {
        number: 500,
        suffix: "+",
        label: "LinkedIn Connections",
    },
    {
        number: 100,
        suffix: "%",
        label: "Commitment",
    },
];

export default function Stats() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl sm:p-8">
                    <ExperienceCounter
                        value={item.number}
                        suffix={item.suffix}
                    />

                    <p
                        className="
                            mt-2
                            text-slate-400
                        "
                    >
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
}