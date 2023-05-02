import { memo } from 'react';

export const genericTypedMemo: <T>(component: T) => T = memo;
