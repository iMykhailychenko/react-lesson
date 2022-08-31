export const DeveloperItem = ({ dev, onDelete }) => {
    const handleDelete = () => {
        onDelete(dev.id);
    };

    return (
        <div className="card my-5">
            <div className="card-body">
                <h5 className="card-title">
                    {dev.firstName} {dev.lastName}
                </h5>
                <p className="card-text">{dev.options}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{dev.city}</li>
                <li className="list-group-item">{dev.phone}</li>
                <li className="list-group-item">{dev.framework}</li>
                <li className="list-group-item">{dev.isFullTime ? 'Full time' : 'Part time'}</li>
            </ul>

            <div className="card-body">
                <button type="button" className="btn btn-link card-link" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};
