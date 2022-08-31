export const Modal = ({ onClose }) => {
    const backdropClose = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            <div className="modal-backdrop fade show" />

            <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" style={{ display: 'block' }} onClick={backdropClose}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">
                                Modal title
                            </h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose} />
                        </div>
                        <div className="modal-body">
                            <p>This is a vertically centered modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
