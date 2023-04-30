import cl from './popup.module.scss';
import { DropdownDirection } from '../../../types/ui';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cl.optionsBottomLeft,
    'bottom right': cl.optionsBottomRight,
    'top left': cl.optionsTopLeft,
    'top right': cl.optionsTopRight,
};
