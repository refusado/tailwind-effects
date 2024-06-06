import { ReactNode } from 'react';
import { Glowing } from './components/effects/Glowing';
import { RoundedDivider } from './components/effects/RoundedDivider';
import { TextGradient } from './components/effects/TextGradient';
import { GridBackground } from './components/effects/GridBackground';

export type Effect = {
  id: number;
  name: string;
  element: ReactNode;
};

export const EFFECTS: Effect[] = [
  {
    id: 1,
    name: 'Glowing elements',
    element: <Glowing />,
  },
  {
    id: 2,
    name: 'Independent rounded divider',
    element: <RoundedDivider />,
  },
  {
    id: 3,
    name: 'Gradient text',
    element: <TextGradient />,
  },
  {
    id: 4,
    name: 'Grid Background',
    element: <GridBackground />,
  },
];
