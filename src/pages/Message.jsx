import "./Message.css";
import NoMessageImage from "../assets/no-message.png";

function Message() {
    return (
        <div className="message-container">
            <img
                src={NoMessageImage}
                alt="No messages here"
                className="no-message-image"
            />
            <p className="no-message-text">No messages here yet!</p>
        </div>
    );
}

export default Message;
