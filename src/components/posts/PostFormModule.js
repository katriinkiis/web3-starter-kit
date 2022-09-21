import { posts } from 'aleph-js'
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {ModalBody} from "react-bootstrap";
import PostModel from "../../models/PostModel";
import pfp from "../../images/ilves.jpg";



function PostFormModule(props) {

    const modalOpen = props.modalOpen

    const [show, setShow] = useState(false)
    const  [postContent, setPostContent] = useState("")
    const [txInProgress, setTxInProgress] = useState(false)

    const handleClose = () => setShow(false)

    const handleTyping = (e) => {
        setPostContent(e.target.value) // sets postContent whatever e.target.value will be
    }

    const close = (e) => {
        e.preventDefault()

        props.setModalOpen(false)
    }

    const submitPost = async (e) => {
        e.preventDefault()

        setTxInProgress(true)

        PostModel.create(
            props.alephAccount.address,
            postContent,
            props.alephAccount)
            .catch((error) => {
            setTxInProgress(false)
        })
    }

    useEffect(() => {
        if (props.modalOpen) {
            setPostContent('')
            setTxInProgress(false)
        }
    }, [props.modalOpen])

return (
    <div>
        <Modal show={props.modalOpen} onHide={handleClose}>
            <Modal.Header className="py-0">
                <a href='#' onClick={close}>×</a>
            </Modal.Header>
            {txInProgress ?
            <ModalBody>
                <div className="p-5 mb-3 text-center">
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className="mt-2" >Please confirm in your wallet</p>
                </div>
            </ModalBody>
            :
            <div>
                <Modal.Body>
                    <textarea  onChange={handleTyping} placeholder='What´s on your mind?' className="form-control"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                            className="btn-post"
                            onClick={submitPost}
                            disabled={ postContent === '' || postContent === undefined}>
                        Post
                    </Button>
                </Modal.Footer>
            </div>
            }
        </Modal>
    </div>
    );
}

export default PostFormModule;