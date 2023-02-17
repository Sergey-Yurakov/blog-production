import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Buttton/Button';

describe('Button', () => {
    test('Test render in doom', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test add clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
