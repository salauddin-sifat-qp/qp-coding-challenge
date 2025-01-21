import { Box, Square, Circle, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { RootState } from "../../ReduxStore/store";
import { setBoxes, setConnecting, setConnections } from "../../ReduxStore/slices/CanvasSlice";
import { useNavigate } from "react-router-dom";

const boxesData = [
  { type: "square", icon: Square },
  { type: "circle", icon: Circle },
  { type: "triangle", icon: Box },
];

export const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { connecting } = useSelector((state:RootState) => state.canvas);
  const handleDragStart = (e: React.DragEvent, type: string) => {
    e.dataTransfer.setData("boxType", type);
    console.log("Type---", type)
  };

  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  }
 
   const handleBoxConnected = (boxId: string) => {
      if (connecting === null) {
        dispatch(setConnecting(boxId))
      } else if (connecting !== boxId) {
        dispatch(setConnections({
          start: connecting,
          end: boxId
        }))
        dispatch(setConnecting(boxId))
      }
    };
  

  const handleAddBox = (type: string) => {
    const x = 210;
    const y = getRandomNumber();

    // dispatch(
    //   setBoxes({
    //     id: nanoid(),
    //     type,
    //     position: { x, y },
    //   })
    // );
    const ID = nanoid()
    if(ID){
      dispatch(setBoxes({
        id: ID,
        type,
        position: {x,y}
      }))

      handleBoxConnected(ID)
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <div className="space-y-3">
        {boxesData.map(({ type, icon: Icon }) => (
          <div
            key={type}
            draggable
            onDragStart={(e) => handleDragStart(e, type)}
            className="p-4 border border-gray-200 rounded-lg cursor-move hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Icon className="w-5 h-5" />
            <span className="capitalize">{type}</span>
          </div>
        ))}
        <button
          onClick={() => handleAddBox("square")}
          className="border border-gray-200 p-2 rounded w-full"
        >
          Add Box
        </button>

        <button
          onClick={() => navigate("/play-ground")}
          className="border border-gray-200 p-2 rounded w-full flex items-center gap-1"
        >
          <span><Plus/></span> Create New Integration
        </button>

        <button
          onClick={() => navigate("/hooks-play-ground")}
          className="border border-gray-200 p-2 rounded w-full flex items-center justify-center gap-1"
        >
          Go to Playground
        </button>
      </div>
    </div>
  );
};
