const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                id={name}
                name={name}
                className="form-control"
                // autoFocus
                // ref={props.username}
            />
            {error && <div className="mt-1 alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;
