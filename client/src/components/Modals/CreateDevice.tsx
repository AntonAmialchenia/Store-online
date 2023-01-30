import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { ModalProps } from './CreateType';
import { Context } from './../../index';
import { typesBrands } from '../../store/DeviseStore';

interface info {
     title: string, 
     description: string, 
     number: number 
}

const CreateDevice = ({ show, onHide }: ModalProps) => {
  const { device } = useContext(Context);
  const [ info, setInfo] = useState<info[] | never[]>([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter(i => i.number !== number));
  };

  return (
    <Modal
      show={show}
      noHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="my-2 mb-2">
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type: typesBrands) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="my-2 mb-2">
            <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand: typesBrands) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          />
          <Form.Control className="mt-3" type="file" />
          <hr />
          <Button 
                className='mb-3'
                variant="outline-dark"
                onClick={addInfo}
          >
            Добавить новое устройство
        </Button>
        {info.map(i => 
                <Row className='mb-3' key={i.number}>
                    <Col md={4}>
                        <Form.Control
                            placeholder='Введите название свойства'
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Control
                            placeholder='Введите описание свойства'
                        />
                    </Col>
                    <Col md={4}>
                        <Button 
                            onClick={() => removeInfo(i.number)}
                            variant='outline-danger'
                        >
                            Удалить
                        </Button>
                    </Col>
                </Row>
        )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
