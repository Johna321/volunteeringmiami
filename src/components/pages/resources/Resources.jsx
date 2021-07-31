import React, { useEffect, useState } from 'react';
import vmLogo from '../../../bluevmlogo.png';
import './Resources.css';
import InfiniteScroll from "react-infinite-scroll-component";

const Resources = () => {
    const limit = 3;

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [endReached, setEndReached] = useState(false);
    const [offset, setOffset] = useState(0);

    const fetchPosts = async() => {
        if (!loading){
            setLoading(true);
            let jsonData = await fetch (
                `https://288jofwgy1.execute-api.us-east-2.amazonaws.com/prod/resources?offset=${offset}&limit=${limit}`,
                { method: "GET" }
            );
            jsonData = await jsonData.json();
            if (jsonData.length > 0){
                setPosts(posts.concat(jsonData));
                setOffset(offset + limit);
            } else {
                setEndReached(true);
            }
            setLoading(false);
        }
    };

    //const refreshPosts = () => {
    //    setPosts([]);
    //    setOffset(0);
    //    setEndReached(false);
    //    setTimeout(() => {fetchPosts()}, 0);
    //};

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = () => {
        const renderedPosts = posts.map(post => {return (
            <div key={post.id} className="resources-panel-container">
                <div className="panel panel-resources">
                    <div className="panel-heading">
                        <img className="imageLogo" src={vmLogo} alt="logo of this corporation" />
                        <h1 className="resourcesPostTitle">{post.title}</h1>
                    </div>
                    <div>
                        {post.body}
                    </div>
                </div>
            </div>
        )});
       return renderedPosts;
   };

    return (
        <div style={{minHeight: '100vh', backgroundColor: '#eee'}}>
            <InfiniteScroll
                dataLength={posts.length}     
                next={fetchPosts}
                hasMore={!endReached}
            >
                {renderPosts()}
            </InfiniteScroll>
        </div>
    );
};

export default Resources;