import React, { useState, useEffect } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("component didmount");
        console.log("component did update");
        return () => {
            console.log("component will unmount");
        };
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h2>{count}</h2>
            <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        </div>
    );
};

export default Counter;
