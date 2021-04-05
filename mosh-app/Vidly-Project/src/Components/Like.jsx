const Like = (props) => {
    const { liked, onClick } = props;
    let iconClass = "fa-heart ";

    if (liked) {
        iconClass += "fas";
    } else {
        iconClass += "far";
    }

    return <i className={iconClass} onClick={onClick}></i>;
}
 
export default Like;
