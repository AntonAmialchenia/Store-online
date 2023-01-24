import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import ListGroup from 'react-bootstrap/ListGroup'

const TypeBar = () => {
    const {device} = useContext(Context)
    return (
        <ListGroup className='mt-2'>
            {device.types.map((type:any) =>
                <ListGroup.Item 
                    style={{cursor:'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default observer(TypeBar);