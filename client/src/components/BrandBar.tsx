import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import { Row, Card } from 'react-bootstrap';

const BrandBar = () => {
    const {device} = useContext(Context)
    return (
        <div className='d-flex mt-2 flex-wrap'>
            {device.brands.map((brand:any) => 
                <Card
                    key={brand.id}
                    className='p-3'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                    style={{cursor:'pointer'}}
                >
                    {brand.name}
                </Card>  
            )}
        </div>
    );
};

export default observer(BrandBar);