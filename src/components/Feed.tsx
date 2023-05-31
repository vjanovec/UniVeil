import { useSelector } from "react-redux"
import { PostType } from "../types/PostType"
import { Post } from "./Post"
import React from "react"

export function Feed() {
    const feed = useSelector((state: {feed: PostType[]}) => state.feed)

    return (
        <div>
            {feed.map(x => 
            <Post 
            postId={x.postId} 
            title={x.title} 
            // TODO: Replace '...' to 'see more' button
            text={x.text.length > 100 ? x.text.substring(0,100)+'...' : x.text} 
            voteCount={x.voteCount}/>
            )}
        </div>
    )
}