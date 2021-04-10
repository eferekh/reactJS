const Input = ({ name, label, value, error, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="form-control"
                id={name}
                name={name}
                // autoFocus
                // ref={props.username}
            />
            {error && <div className="mt-1 alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;
