import { useState } from "react"
import cl from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>Count: {count} </h3>
            <div>
                <button onClick={() => setCount(prev => prev + 1)} className={cl.btn} >increment</button>
            </div>
        </div>
    )
}
