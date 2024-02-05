import UserInfo from "./UserInfo.JSX";
import FormatDate from "./formatDate";

function ComposedComment(props) {
    return (
        <div className = "Comment">
            <UserInfo user = {props.author}/>
            <div className = "Comment-text"> {props.text}</div>
            <div className="Comment-date">
        <FormatDate date ={props.date}/>
        </div>
        </div>
    )
}

export default ComposedComment;