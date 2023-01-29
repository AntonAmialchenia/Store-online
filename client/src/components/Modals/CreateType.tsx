import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

export interface ModalProps {
    show: boolean
    onHide: () => void
} 

const CreateType = ({show, onHide}: ModalProps) => {
    
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
                    Добавить тип
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            placeholder='Введите название типа'
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

export default CreateType;