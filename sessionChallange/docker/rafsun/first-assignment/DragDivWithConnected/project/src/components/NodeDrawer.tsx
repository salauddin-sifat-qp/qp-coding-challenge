import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { X} from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../ReduxStore/store';

interface DrawerProps {
    isOpen: boolean;
    handleCloseDrawer?: () => void;
}

const NodeDrawer = ({isOpen, handleCloseDrawer}: DrawerProps) => {
    const {nodeConfiguration} = useSelector((state: RootState) => state.playground);
    return (
        <>
            <Drawer
                open={isOpen}
                onClose={handleCloseDrawer}
                direction='right'
                className='bla bla bla'
                enableOverlay={false}
            >
                <div className=' border-b-2 '>
                <div className='flex items-center justify-between py-3 px-2'>
                    <p>Title Here {nodeConfiguration?.type} </p>
                    <button onClick={handleCloseDrawer}>
                    <X/>
                    </button>
                </div>
                </div>
            </Drawer>
        </>
    )
}

export default NodeDrawer;
