// src/hooks/useCountUp.js
import {useState, useEffect} from "react";

const useCountUp = (end, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / ((duration * 1000) / 60);

        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(start));
            }
        }, 1000 / 60);

        return () => clearInterval(interval);
    }, [end, duration]);

    return count;
};

export default useCountUp;
