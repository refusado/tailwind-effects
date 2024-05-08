import { ReactNode } from "react";
import { BasicGradient } from "./components/effects/BasicGradient";
import { BasicGradient2 } from "./components/effects/BasicGradient2";
import { BasicGradient3 } from "./components/effects/BasicGradient3";
import { BasicGradient4 } from "./components/effects/BasicGradient4";
import { BasicGradient5 } from "./components/effects/BasicGradient5";
import { BasicGradient6 } from "./components/effects/BasicGradient6";

export type Effect = {
  id: number,
  name: string,
  element: ReactNode
}

export const EFFECTS: Effect[] = [
  {
    id: 1,
    name: 'Basic gradient effect',
    element: <BasicGradient />
  },
  {
    id: 2,
    name: 'Basic gradient effect 2',
    element: <BasicGradient2 />
  },
  {
    id: 3,
    name: 'Basic gradient effect 3',
    element: <BasicGradient3 />
  },
  {
    id: 4,
    name: 'Basic gradient effect 4',
    element: <BasicGradient4 />
  },
  {
    id: 5,
    name: 'Basic gradient effect 5',
    element: <BasicGradient5 />
  },
  {
    id: 6,
    name: 'Basic gradient effect 6',
    element: <BasicGradient6 />
  }
];