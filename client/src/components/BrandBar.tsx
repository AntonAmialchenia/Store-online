import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import { Card } from 'react-bootstrap';
import { typesBrands } from '../store/DeviseStore';


const BrandBar = () => {
    const {device} = useContext(Context)
    return (
        <div className='d-flex mt-2 flex-wrap'>
            {device.brands.map((brand:typesBrands) => 
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