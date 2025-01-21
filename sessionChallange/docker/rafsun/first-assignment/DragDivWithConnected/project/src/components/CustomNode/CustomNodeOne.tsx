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

function CustomNodeOne({ isConnectable, selected }: Props) {
  // id,
  // data,
  // selected,
  // position,
  // dragging,
  // width,
  // height,
  // isConnectable,
  // sourcePosition,
  // targetPosition,
  // style,
  // className,

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        id="targetTop"
        style={handleStyle}
      />
      <div className={clsx('bg-green-400 p-3 rounded', selected ? 'border border-yellow-600' : '')}>
        <p className="text-white font-mono">Node One</p>
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
        position={Position.Bottom}
        id="sourceBottom"
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
    </div>
  );
}

export default CustomNodeOne;
