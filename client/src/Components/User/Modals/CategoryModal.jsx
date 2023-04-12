import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { adminAddGenreAction } from '../../../Redux/Actions/adminActions/adminGenreActions';

function MyVerticallyCenteredModal(props) {
    const [genre, setGenre] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(adminAddGenreAction(genre));
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Genre
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='addgenreform' onSubmit={handleSubmit(onSubmit)}>
                    <p style={{ color: 'red', margin: '0' }}>{errors.genre && "Enter a valid genre"}
                    </p>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text"
                            placeholder="enter genre name"
                            autoFocus
                            {...register("genre", { required: true })} onChange={(e) => setGenre(e.target.value)} />
                    </Form.Group>
                    <Button type='submit'>Add</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function CategoryModal() {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
            <Button variant="dark" onClick={() => setModalShow(true)} className='ms-5'>
                Add Genre
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default CategoryModal