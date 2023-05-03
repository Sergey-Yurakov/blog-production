import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Buttton';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slices/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();

    // new selector
    const counterValue = useCounterValue();

    // new slice
    const {
        add,
        increment,
        decrement,
    } = useCounterActions();
    const handleIncrement = () => {
        // dispatch(counterActions.increment());
        increment();
    };
    const handleDecrement = () => {
        // dispatch(counterActions.decrement());
        decrement();
    };
    const handleAddFive = () => {
        // dispatch(counterActions.decrement());
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={handleAddFive}
                data-testid="addFive-btn"
            >
                {t('addFive')}
            </Button>
            <Button
                onClick={handleIncrement}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={handleDecrement}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
