// import Dagre from "@dagrejs/dagre";
import {
  ReactFlow,
  Controls,
  Background,
  //   applyNodeChanges,
  //   applyEdgeChanges,
  //   NodeChange,
  //   EdgeChange,
  ReactFlowProvider,
  // useReactFlow,
  // Panel,
  // useNodesState,
  // useEdgesState,
  NodeChange,
  Connection,
  // applyNodeChanges,
  // NodePositionChange,
  // Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useMemo, useRef } from "react";
// import TextUpdaterNode from "./CustomNode";
import { nanoid } from "nanoid";
import "@xyflow/react/dist/style.css";
import NodeDrawer from "./NodeDrawer";
import CustomNodeOne from "./CustomNode/CustomNodeOne";
import CustomNodeTwo from "./CustomNode/CustomNodeTwo";
import CustomNodeThree from "./CustomNode/CustomNodeThree";
import { useDispatch, useSelector } from "react-redux";
import { setConnecting, setEdgeList, setIsConfigureOpen, setNodeConfiguation, setNodesList, setUpdateNodePosition } from "../ReduxStore/slices/PlayGroundSlice";
import { RootState } from "../ReduxStore/store";
import { Nodes } from "../types";

// const initialNodes = [
//   {
//     id: "node-1",
//     data: { label: "Hello" },
//     position: { x: 0, y: 0 },
//     type: "textUpdater",
//   },
//   {
//     id: "1",
//     data: { label: "Hello" },
//     position: { x: 50, y: 50 },
//     // type: "input",
//   },
//   {
//     id: "2",
//     data: { label: "World" },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: "3",
//     data: { label: "Left" },
//     position: { x: 200, y: 200 },
//     // type: "input",
//   },
//   {
//     id: "4",
//     data: { label: "World" },
//     position: { x: 300, y: 300 },
//   },
// ];
// const initialEdges = [
//   {
//     id: "edge-1",
//     source: "node-1",
//     target: "1",
//     label: "to the",
//     sourceHandle: "a",
//   },
//   { id: "edge-2", source: "1", target: "2", label: "to the" },
//   { id: "edge-3", source: "2", target: "3", label: "to the end" },
//   { id: "edge-4", source: "3", target: "4", label: "final end", type: "step" },
// ];

// export const initialNodes = [
//   //   {
//   //     id: "custom-node-1",
//   //     data: { label: "Hello" },
//   //     position: { x: 0, y: 0 },
//   //     type: "textUpdater",
//   //   },
//   {
//     id: "node-1",
//     data: { label: "Hello" },
//     position: { x: 100, y: 120 },
//     type: "nodeOne",
//   },
//   {
//     id: "node-2",
//     data: { label: "Hello" },
//     position: { x: 200, y: 220 },
//     type: "nodeTwo",
//   },
//   {
//     id: "node-3",
//     data: { label: "Hello" },
//     position: { x: 300, y: 320 },
//     type: "nodeThree",
//   },
//   {
//     id: "1",
//     //   type: 'input',
//     data: { label: "input" },
//     position: { x: 0, y: 100 },
//   },
//   {
//     id: "2",
//     data: { label: "node 2" },
//     position: { x: 0, y: 200 },
//   },
//   {
//     id: "2a",
//     data: { label: "node 2a" },
//     position: { x: 0, y: 300 },
//   },
//   {
//     id: "2b",
//     data: { label: "node 2b" },
//     position: { x: 0, y: 400 },
//   },
//   {
//     id: "2c",
//     data: { label: "node 2c" },
//     position: { x: 0, y: 500 },
//   },
//   {
//     id: "2d",
//     data: { label: "node 2d" },
//     position: { x: 0, y: 600 },
//   },
//   {
//     id: "3",
//     data: { label: "node 3" },
//     position: { x: 200, y: 250 },
//   },
// ];

// export const initialEdges = [
//   {
//     id: "ecustom-node-1",
//     source: "custom-node-1",
//     target: "1",
//     animated: true,
//     sourceHandle: "b",
//   },
//   { id: "e12", source: "1", target: "2", animated: true },
//   { id: "e13", source: "1", target: "3", animated: true },
//   { id: "e22a", source: "2", target: "2a", animated: true },
//   { id: "e22b", source: "2", target: "2b", animated: true },
//   { id: "e22c", source: "2", target: "2c", animated: true },
//   { id: "e2c2d", source: "2c", target: "2d", animated: true },
// ];

// const getLayoutedElements = (nodes: any[], edges: any[], options: { direction: any; }) => {
//   const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
//   g.setGraph({ rankdir: options.direction });

//   edges.forEach((edge: { source: Dagre.Edge; target: string | { [key: string]: any; } | undefined; }) => g.setEdge(edge.source, edge.target));
//   nodes.forEach((node: string | Dagre.Label) =>
//     g.setNode(node.id, {
//       ...node,
//       width: node.measured?.width ?? 0,
//       height: node.measured?.height ?? 0,
//     })
//   );

//   Dagre.layout(g);

//   return {
//     nodes: nodes.map((node: { id: string | Dagre.Label; measured: { width: any; height: any; }; }) => {
//       const position = g.node(node.id);
//       // We are shifting the dagre node position (anchor=center center) to the top left
//       // so it matches the React Flow node anchor point (top left).
//       const x = position.x - (node.measured?.width ?? 0) / 2;
//       const y = position.y - (node.measured?.height ?? 0) / 2;

//       return { ...node, position: { x, y } };
//     }),
//     edges,
//   };
// };

const GroundFlow = () => {
  const dispatch = useDispatch();
  const playGroundRef = useRef<HTMLDivElement>(null);
  // const { fitView } = useReactFlow();
  const {nodesList, connecting, edgeList, isConfigureOpen} = useSelector((state: RootState) => state.playground);
  // const [nodes, setNodes] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(
    () => ({
      nodeOne: CustomNodeOne,
      nodeTwo: CustomNodeTwo,
      nodeThree: CustomNodeThree,
    }),
    []
  );

  


  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      changes.forEach((change) => {
        // Ensure the change is of type 'position' and has valid position data
        if (change.type === "position" && change.position) {
          const { id, position } = change;
  
          // Validate the position values before dispatching
          if (!isNaN(position.x) && !isNaN(position.y)) {
            dispatch(
              setUpdateNodePosition({
                id,
                x: position.x,
                y: position.y,
              })
            );
          }
        }
      });
    },
    [dispatch]
  );

  const onConnect = useCallback(
      (connection:Connection ) => {
        if(connection){
          dispatch(setEdgeList({
            id: nanoid(),
            source: connection.source,
            target: connection.target,
            type: 'step',
            animated: true,
            sourceHandle: connection.sourceHandle,
            targetHandle: connection.targetHandle

          }))
        }
      },
      [dispatch],
    );

  // const onLayout = useCallback(
  //   (direction) => {
  //     const layouted = getLayoutedElements(nodes, edges, { direction });

  //     setNodes([...layouted.nodes]);
  //     setEdges([...layouted.edges]);

  //     window.requestAnimationFrame(() => {
  //       fitView();
  //     });
  //   },
  //   [nodes, edges]
  // );


  const handleNodeClick = (_event: React.MouseEvent, node:Nodes) => {
    if (connecting === null) {
          dispatch(setConnecting(node.id))
        } else if (connecting !== node.id) {
          // dispatch(setEdgeList({
          //   id: nanoid(),
          //   source: connecting,
          //   target: node.id,
          //   type: 'step',
          //   animated: true
          // }))
          dispatch(setConnecting(null))
        }
    dispatch(setNodeConfiguation(node))    
    dispatch(setIsConfigureOpen(true))
  };

  const handleCloseDrawer = () => {
    dispatch(setIsConfigureOpen(false))
  };

  const handleDropNode = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("boxType");
    const playGroundRect = playGroundRef.current?.getBoundingClientRect();
    if (playGroundRect) {
      const x = e.clientX - playGroundRect.left;
      const y = e.clientY - playGroundRect.top;

      const ID = nanoid();
      if (ID) {
        dispatch(
          setNodesList({
            id: nanoid(),
            data: { label: "Hello" },
            type: type,
            position: { x: x, y: y },
          })
        );
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 relative overflow-hidden">
      <ReactFlow
        nodes={nodesList}
        onNodesChange={onNodesChange}
        edges={edgeList}
        // onEdgesChange={onEdgesChange}
        // fitView
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        onDrop={handleDropNode}
        onDragOver={handleDragOver}
        ref={playGroundRef}
      >
        <Background />
        <Controls />
        <NodeDrawer isOpen={isConfigureOpen} handleCloseDrawer={handleCloseDrawer} />
        {/* <Panel position="top-right">
          <button onClick={() => onLayout("LR")}>horizontal layout</button>
        </Panel> */}
      </ReactFlow>
    </div>
  );
};
const Ground = () => {
  return (
    <ReactFlowProvider>
      <GroundFlow />
    </ReactFlowProvider>
  );
};
export default Ground;
