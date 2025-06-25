import React from 'react';
import './blog.css'; // Import the CSS file

function Blog() {
    return (
        <div className="blog-page">
            <div className="subscribe-container">
                <h1 className="subscribe-heading">Subscribe to Our Blog</h1>
                <iframe
                    src="https://huddlerin.substack.com/embed"
                    width="700"
                    height="400"
                    className="subscribe-iframe"
                    frameBorder="0"
                    scrolling="no"
                    title="Substack Subscribe"
                ></iframe>
            </div>
        </div>
    );
}

export default Blog;
