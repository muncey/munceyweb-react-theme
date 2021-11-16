import React from 'react';
import PostByline from './PostByline';
import { Link } from "react-router-dom";

/**
 * Defines the layout for a post list item
 */
export default function PostListItem(props) {
  const post = props.post;
  return (
    <article className="post-excerpt" key={post.id}>
      <div className="post-byline">
        <PostByline userId={post.author} timestamp={post.date} />
      </div>
      <div className="post-details">
        <h3 className="post-title">{post.title.rendered}</h3>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </div>
    </article>    
  )
}
