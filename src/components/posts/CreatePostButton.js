import Button from "react-bootstrap/Button";
import React from "react"

function CreatePostButton(props) {

    const setModalOpen = props.setModalOpen

    const handleShow = (e) => {
        e.preventDefault()
        setModalOpen(true)
    }

    return (
        <div className="d-grid gap-2">
            <Button variant="primary" className="btn-lg btn-post" onClick={handleShow}>
                Post something
            </Button>
        </div>
    );
}

export default CreatePostButton;