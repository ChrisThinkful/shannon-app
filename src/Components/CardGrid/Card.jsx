import React from "react";

const Card = ({props}) => {
    const {title, description, metadata, tags, likes, comments} = props;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{metadata.author}</p>
            <p>{metadata.date_published}</p>
            <p>{tags}</p>
            <p>{likes}</p>
            {comments.map((comment, i) => (
                <p key={i}>{comment.user}: {comment.comment}</p>
            ))}
        </div>
    )
};

export default Card;

