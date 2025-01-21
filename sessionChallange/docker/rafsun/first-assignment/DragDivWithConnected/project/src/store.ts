import { create } from 'zustand';
import { Box, Connection } from './types';

interface CanvasStore {
  boxes: Box[];
  connections: Connection[];
  addBox: (box: Box) => void;
  updateBoxPosition: (id: string, x: number, y: number) => void;
  addConnection: (connection: Connection) => void;
}

export const useCanvasStore = create<CanvasStore>((set) => ({
  boxes: [],
  connections: [],
  addBox: (box) =>
    set((state) => ({
      boxes: [...state.boxes, box],
    })),
  updateBoxPosition: (id, x, y) =>
    set((state) => ({
      boxes: state.boxes.map((box) => box.id === id ? {...box,position: {x, y} }: box)
    }
  )),
  addConnection: (connection) =>
    set((state) => ({
      connections: [...state.connections, connection],
    })),
}));