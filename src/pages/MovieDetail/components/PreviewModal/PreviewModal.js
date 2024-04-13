import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./PreviewModal.style.css";
import YouTube from "react-youtube";

const PreviewModal = ({ show, handleClose, videos }) => {
    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };

    console.log("videos", videos);
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            bg="dark"
            data-bs-theme="dark"
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-light">예고편 보기 🎬</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {videos?.results.length > 0 && (
                        <YouTube
                            videoId={videos?.results[0].key}
                            opts={opts}
                            containerClassName="video-container"
                            className="preview-video"
                        />
                    )}
                </div>
                ;
            </Modal.Body>
        </Modal>
    );
};

export default PreviewModal;
