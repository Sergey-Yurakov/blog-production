import type { CounterSchema } from './model/types/counterSchema';
import { Counter } from './ui/Counter';
import { counterReducer } from './model/slices/counterSlice';

export {
    counterReducer,
    Counter,
    CounterSchema,
};
