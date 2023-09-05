import React from "react";

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </article>
    )
}

export default Article;