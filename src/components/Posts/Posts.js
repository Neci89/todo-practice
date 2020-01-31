import React from 'react';
import {connect} from 'react-redux';
import Post from '../Post/Post';

const Posts = ({posts}) => {
    const renderPosts = () => {
        return posts.map(post => {
            return <Post key={post.id} post={post} />
        })
    }
    return (
        <div>
           {renderPosts()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Posts);