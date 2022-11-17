import React from "react";
import ReactDOM from "react-dom/client";

function formateDate(date) {
    return date.toLocaleDateString()

}
export const Avatar = props => {
    return <div className="avatar">
        <img src={props.avatarUrl} alt="Author Name" />
    </div>
}
export const User = props => {
    return <div>
        <p>{props.name}</p>
    </div>
}

export const UserInfo = props => {
    return <div className="userinfo">
        <Avatar avatarUrl={props.author.avatarUrl} />
        <User name={props.author.name} />
    </div>
}
export const CommentDetails = props => {
    return <div>
        <div className="commenttext">
            <p>{props.text}</p>
        </div>
        <div className="commentdate">
            {formateDate(props.date)}
        </div>
    </div>
}
//with breaking 
export const Comment = props => {
    return <div className="comment">
        <div className="userinfo">
            <UserInfo author={props.author} />
        </div>
        <div>
            <CommentDetails text={props.text} date={props.date} />
        </div>
    </div>
}


export const App = () => {
    //pass data to the comments:this data may come from api later 
    const comment = {
        date: new Date(),
        text: 'React is awesome lib',
        author: {
            name: 'Subramanian',
            avatarUrl: 'http://placekitten.com/g/64/64'
        }
    }

    return <>
        <Comment date={comment.date} text={comment.text} author={comment.author} />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)