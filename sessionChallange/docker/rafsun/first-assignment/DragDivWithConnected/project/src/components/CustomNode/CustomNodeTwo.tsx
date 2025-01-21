import { Handle, Position } from "@xyflow/react";
import clsx from "clsx";

const handleStyle = { 
  background: "white",
  border: '1px solid gray'
 };

interface Props {
  isConnectable?: boolean;
  data?: unknown;
  selected?: boolean;
}

function CustomNodeTwo({ isConnectable, selected }: Props) {
  return (
    <div className="text-updater-node">
      <Handle
        id="targetTp"
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={handleStyle}
      />
      <div
        className={clsx(
          "bg-red-400 p-3 rounded",
          selected ? "border border-blue-900" : ""
        )}
      >
        <p className="text-white font-mono">Node Two</p>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="sourceRight"
        isConnectable={isConnectable}
        style={handleStyle}
      />
       <Handle
        type="source"
        position={Position.Left}
        id="sourceLeft"
        isConnectable={isConnectable}
        style={handleStyle}
      />
       <Handle
        type="source"
        position={Position.Bottom}
        id="sourceBottom"
        isConnectable={isConnectable}
        style={handleStyle}
      />
    </div>
  );
}

export default CustomNodeTwo;
