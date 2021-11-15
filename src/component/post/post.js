import React from 'react'
import './post.css';
import Avatar from '@material-ui/core/Avatar'
export default function post(props) {
    return (
        <div className="PostContainer">
        <div className="Post">
            <div className="PostHeader">
                <Avatar alt={props.post.username} src="src" className="PostHeaderAvatar" />
                <h4>{props.post.username}</h4>
            </div>
            <img className="PostImage" src={props.post.image} alt="PostImage" />
            <h5 className="PostText"><strong>{props.post.username} : </strong>{props.post.caption}</h5>
        </div>
        </div>
    )
}
