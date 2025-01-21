import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Edges, NodePositionUpdate, Nodes } from "../../types";

interface PlayGroundStore {
  nodesList: Nodes[];
  edgeList: Edges[];
  connecting: string | null;
  isConfigureOpen: boolean;
  nodeConfiguration: Nodes | null;
}

const initialState: PlayGroundStore = {
  nodesList: [],
  edgeList: [],
  connecting: null,
  isConfigureOpen: false,
  nodeConfiguration: null,
};

const playGroundSlice = createSlice({
  name: "playground",
  initialState: initialState,
  reducers: {
    setNodesList: (state, action: PayloadAction<Nodes>) => {
      state.nodesList = [...state.nodesList, action.payload];
    },

    setUpdateNodePosition: (
      state,
      action: PayloadAction<NodePositionUpdate>
    ) => {
      state.nodesList = state.nodesList.map((node) =>
        node.id === action.payload.id
          ? { ...node, position: { x: action.payload.x, y: action.payload.y } }
          : node
      );
    },

    setConnecting: (state, action: PayloadAction<string | null>) => {
      state.connecting = action.payload;
    },

    setEdgeList: (state, action: PayloadAction<Edges>) => {
      state.edgeList = [...state.edgeList, action.payload];
    },

    setIsConfigureOpen: (state, action: PayloadAction<boolean>) => {
      state.isConfigureOpen = action.payload;
    },

    setNodeConfiguation: (state, action: PayloadAction<Nodes | null>) => {
      state.nodeConfiguration = action.payload;
    },
  },
});

export default playGroundSlice.reducer;

export const {
  setNodesList,
  setUpdateNodePosition,
  setEdgeList,
  setConnecting,
  setIsConfigureOpen,
  setNodeConfiguation
} = playGroundSlice.actions;
