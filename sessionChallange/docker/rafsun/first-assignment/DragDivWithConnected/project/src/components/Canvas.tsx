import { useRef } from 'react';
import Draggable from 'react-draggable';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { nanoid } from 'nanoid';
import { Box as BoxIcon, Circle, Square } from 'lucide-react';
import { setBoxes, setConnecting, setConnections, setUpdatePosition } from '../ReduxStore/slices/CanvasSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../ReduxStore/store';

const iconMap = {
  square: Square,
  circle: Circle,
  triangle: BoxIcon,
};

export const Canvas: React.FC = () => {
  const dispatch = useDispatch()
  const canvasRef = useRef<HTMLDivElement>(null);
  const { boxes, connections, connecting } = useSelector((state:RootState) => state.canvas);

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


  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('boxType');
    const canvasRect = canvasRef.current?.getBoundingClientRect();
  
    if (canvasRect) {
      const x = e.clientX - canvasRect.left;
      const y = e.clientY - canvasRect.top;

      const ID = nanoid()
      if(ID){
        dispatch(setBoxes({
          id: ID,
          type,
          position: {x,y}
        }))

        handleBoxConnected(ID)
      }
     
      
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  


  return (
    <div
      ref={canvasRef}
      className="flex-1 bg-gray-50 relative overflow-hidden"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Xwrapper>
        {boxes.map((box) => {
          const Icon = iconMap[box.type as keyof typeof iconMap];
           return (
            <Draggable
              key={box.id}
              position={box.position}
              onDrag={(e, data) => {
                // updateBoxPosition(box.id, data.x, data.y);
                console.log(e)
                dispatch(setUpdatePosition({
                  id: box.id,
                  x:data.x,
                  y: data.y
                }))
              }}
            >
              <div
                id={box.id}
                // onClick={() => handleBoxClick(box.id)}
                className={`absolute cursor-move p-4 bg-white rounded-lg shadow-md border-2 ${
                  connecting === box.id ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
            </Draggable>
          );
        })}
        {connections.map((connection, index) => (
          <Xarrow
            key={index}
            start={connection.start}
            end={connection.end}
            color="#94a3b8"
            strokeWidth={2}
            path="smooth"
          />
        ))}
      </Xwrapper>
    </div>
  );
};