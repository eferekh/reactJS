import Header from "./common/Header";
import Footer from "./common/Footer";

const NotFound = (props) => {
    const notFoundStyle = {
        backgroundColor: "#343a40",
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        height: "90vh"
    }
    
    return (
        <>
            <Header />
            <div style={notFoundStyle}>
                NOT FOUND (404)
            </div>
            <Footer />
        </>
    );
}
 
export default NotFound;