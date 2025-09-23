import { use } from 'react';
import Friend from "./Friend";

export default function Posts({postsPromise}) {
    const posts = use(postsPromise);
    console.log(posts);
    
    return(
        <div className="card">
            <h2>All posts are here</h2>
            {
                Posts.map(friend => <Friend key={posts.id} post={post}></Friend>)
            }
        </div>
    );
};