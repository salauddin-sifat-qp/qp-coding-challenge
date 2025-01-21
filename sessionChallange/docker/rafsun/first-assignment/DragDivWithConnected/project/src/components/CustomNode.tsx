import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
 
// const handleStyle = { left: 10 };

interface Props {
    isConnectable?: boolean;
    data?: unknown;
}
 
function TextUpdaterNode({ isConnectable }: Props) {
  const onChange = useCallback((evt: { target: { value: unknown;}; }) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className='bg-white p-3 rounded'>
        {/* <label htmlFor="text">Text:</label> */}
        <input id="text" name="text" onChange={onChange} placeholder='Write Anything' className="nodrag border border-black rounded-[2px] outline-none px-1" />
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}
 
export default TextUpdaterNode;