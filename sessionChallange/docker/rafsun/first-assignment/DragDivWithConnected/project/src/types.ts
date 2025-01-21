export interface Box {
  id: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
}

export interface Connection {
  start: string;
  end: string;
}

export interface UpdatePosition{
  id: string;
  x:number;
  y:number;
}

export interface  Nodes {
  id: string;
  data: {label: string;};
  type: string;
  position: {x: number, y:number};
} 

export interface NodePositionUpdate {
  id: string;
  x: number;
  y: number;
}

export interface Edges {
  id: string;
  source: string; 
  target: string; 
  type?: string;
  animated?: boolean;
  sourceHandle?: string | null;
  targetHandle?: string | null;
}

export interface OnConnect { 
  source: string; 
  target: string; 
  sourceHandle: string; 
  targetHandle: string; 
}