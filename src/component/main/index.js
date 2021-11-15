import React, { Component } from 'react';
import Post from '../post/post';
import { firebaseFirestore } from '../../services/firebase'
import './index.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post:[]
        }
    }
    componentDidMount(){
        firebaseFirestore.collection("post")
        .orderBy("createdAt","desc")
        .onSnapshot(snapshot=>{
            let post = [];
            snapshot.forEach(doc=>{

                console.log("doc",doc)
                post.push({...doc.data(),id:doc.id});
            })
            this.setState({post:post})
        })
    }
    render() {
        return (
            <div className="MainContentContainer">
                {this.state.post.map(post=><Post post={post} key={post.key}/>)}
            </div>
        )
    }
}

export default Main