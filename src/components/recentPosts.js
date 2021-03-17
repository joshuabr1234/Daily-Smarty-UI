import React, { Component } from 'react';

class RecentPosts extends Component {
    render() {
        return (
            <div className="Recent Posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">
                        Recent Posts
                    </div>
                    <ul className="recnt-posts-posts">
                        <li>recent post 0</li>
                        <li>recent post 1</li>
                        <li>recent post 2</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RecentPosts;