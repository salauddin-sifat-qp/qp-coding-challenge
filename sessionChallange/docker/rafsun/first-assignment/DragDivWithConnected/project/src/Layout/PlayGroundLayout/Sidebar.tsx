import { Box, Square, Circle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const boxesData = [
  { type: "nodeOne", icon: Square },
  { type: "nodeTwo", icon: Circle },
  { type: "nodeThree", icon: Box },
];

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleDragStart = (e: React.DragEvent, type: string) => {
    e.dataTransfer.setData("boxType", type);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Choose Your Nodes</h2>
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
          onClick={() => navigate(-1)}
          className="border border-gray-200 p-2 rounded w-full flex items-center gap-1 justify-center"
        >
          <span>
            <ArrowLeft />
          </span>{" "}
          Go To Home
        </button>
      </div>
    </div>
  );
};
