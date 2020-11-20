import React from 'react';
import { Modal, Button } from "react-bootstrap"

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
          </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default function Toolbar() {
    const [modalShow, setModalShow] = React.useState(false)
    return (
        <>
            <div className="row toolbar">
                <div className="col-lg-8 btn-group toolbar__navbar" role="group">
                    <button type="button" className="btn -btn-primary">Список дел</button>
                    <button type="button" className="btn -btn-light">Информация</button>
                </div>

                <div className="col-lg-4 btn-group toolbar__tools" role="group">
                    <button onClick={() => setModalShow(true)} type="button" className="btn -btn-primary">Создать Задачу</button>
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}