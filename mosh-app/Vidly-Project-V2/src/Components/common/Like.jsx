const Like = (props) => {
    const { onClick } = props;

    let classes = "fa-heart ";
    if (props.liked) {
        classes += "fas";
    } else {
        classes += "far";
    }

    return (
        <>
            <i
                className={classes}
                style={{ cursor: "pointer" }}
                onClick={onClick}
            ></i>
        </>
    );
};

export default Like;
