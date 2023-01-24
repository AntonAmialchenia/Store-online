import { makeAutoObservable } from 'mobx';

export type typesBrands = {
  id: number;
  name: string;
};

export type devices = {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
};

export default class DeviceStore {
  _types: typesBrands[];
  _brands: typesBrands[];
  _devices: devices[];
  _selectedType: {}

  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Сматфоны' },
      { id: 3, name: 'Нотубуки' },
      { id: 4, name: 'Телевизоры' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
    ];
    this._selectedType = {}
    makeAutoObservable(this);
  }

  setTypes(types: typesBrands[]) {
    this._types = types;
  }
  setBrands(brands: typesBrands[]) {
    this._brands = brands;
  }
  setDevices(devices: devices[]) {
    this._devices = devices;
  }
  setSelectedType(type: boolean) {
    this._selectedType = type
  }

  get types(): {} {
    return this._types;
  }
  get brands(): {} {
    return this._brands;
  }
  get devices(): {} {
    return this._devices;
  }
  get selectedType(): {} {
    return this._selectedType;
  }
}
