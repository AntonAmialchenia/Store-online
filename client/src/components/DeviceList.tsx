import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import DeviseItem from './DeviseItem';

const DeviceList = () => {
    const {device} = useContext(Context)
    return (
        <div style={{rowGap: 10}} className='d-flex flex-wrap mt-3'>
            {device.devices.map((device: any) => 
                <DeviseItem key={device.id} device={device}/>
            )}
        </div>
    );
};

export default observer(DeviceList);