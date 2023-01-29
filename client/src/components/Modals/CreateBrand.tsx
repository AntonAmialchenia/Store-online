import React from 'react';
import { Modal, Button, Form} from 'react-bootstrap'
import { ModalProps } from './CreateType';

const CreateBrand = ({show, onHide}: ModalProps) => {
    return (
            <Modal
                show={show}
                noHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header 
                    closeButton                    
                >
                    <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бренд
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            placeholder='Введите название бренда'
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant="outline-success" onClick={onHide}>Добавить</Button>
                </Modal.Footer>
            </Modal>
    );
};

export default CreateBrand;