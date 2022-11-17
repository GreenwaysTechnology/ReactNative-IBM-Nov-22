import React from "react";
import ReactDOM from "react-dom/client";

function formateDate(date) {
    return date.toLocaleDateString()

}

//without breaking 
const Comment = props => {
    return <div className="comment">
        <div className="userinfo">
            {/* Segment -1 */}
            <div className="avatar">
                <img src={props.author.avatarUrl} alt="Author Name" />
            </div>
            {/* Segment 2 */}
            <div className="username">
                <p>{props.author.name}</p>
            </div>
            {/* Segment 3 */}
            <div className="commenttext">
                <p>{props.text}</p>
            </div>
            {/* Segment 4 */}
            <div className="commentdate">
                {formateDate(props.date)}
            </div>
        </div>
    </div>
}

const App = () => {
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