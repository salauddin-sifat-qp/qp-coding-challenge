import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Box, Connection, UpdatePosition } from "../../types";

interface CanvasStore {
    boxes: Box[];
    connections: Connection[];
    connecting: string | null;
}

const initialState:CanvasStore = {
    boxes: [],
    connections: [],
    connecting: null
}

const canvasSlice = createSlice({
  name: "canvas",
  initialState: initialState,
  reducers: {
    setBoxes: (state, action: PayloadAction<Box>) => {
        state.boxes = [...state.boxes, action.payload];
    },
    setConnections: (state, action: PayloadAction<Connection>) => {
        state.connections = [...state.connections, action.payload];

    },
    setUpdatePosition: (state, action: PayloadAction<UpdatePosition>) => {
        state.boxes = state.boxes.map((box) => box.id === action.payload.id ? {...box, position: {x: action.payload.x, y: action.payload.y } } : box)
    },
    
    setConnecting: (state, action:PayloadAction<string> ) => {
        state.connecting = action.payload
    }
  },
});

export default canvasSlice.reducer;

export const { setBoxes, setConnections, setUpdatePosition, setConnecting} = canvasSlice.actions;