import { useEffect, useState } from "react";

export default function ExperienceCounter({
    value,
    suffix = "",
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;

        const duration = 1500;

        const increment =
            value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <h3
            className="
                text-4xl
                font-black
                text-(--primary)
            "
        >
            {Number(count).toFixed(
                value % 1 !== 0 ? 1 : 0
            )}
            {suffix}
        </h3>
    );
}