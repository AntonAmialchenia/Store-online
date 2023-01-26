import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import DeviseItem from './DeviseItem';
import { Devices } from '../store/DeviseStore';
import { Row } from 'react-bootstrap';

const DeviceList = () => {
    const {device} = useContext(Context)
    return (
        <Row style={{rowGap: 10}} className='d-flex flex-wrap mt-3'>
            {device.devices.map((device: Devices) => 
                <DeviseItem key={device.id} device={device}/>
            )}
        </Row>
    );
};

export default observer(DeviceList);