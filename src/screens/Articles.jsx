import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Post from "../components/Post"
import Search from "../components/Form";
import "../App.css";
import { postStore } from "../lib/Store/postStore";


export function Articles() {
    const { posts, setPosts, removePost } = postStore();
    const [filterPosts, setFilterPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (posts.length > 0) return;
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setPosts(response.data);

        });
    }, []);

    useEffect(() => {
        setFilterPosts(posts);
    }, [posts]);

    const handleChange = (event) => {
        const fltr = posts.filter((p) =>
            p.title.toLowerCase().includes(event.target.value.toLowerCase())
        );

        setFilterPosts(fltr);
    };

    const handleClick = (id) => {
        navigate(`${id}`);
    }


    const handleDelete = (id) => {
        console.log(removePost, id);
        removePost(id);
    }



    return (
        <div className="App">

            <h1>My blog posts</h1>
            <div>
                <Search onChange={handleChange} />
            </div>

            <Link to="/">Home</Link>
            <Link to="add">Ajouter</Link>
            {filterPosts &&
                filterPosts.map((post) => {
                    return (<Post key={post.id}
                        title={post.title}
                        body={post.body}
                        onClick={() => handleClick(post.id)}
                        del={() => handleDelete(post.id)} />
                    );
                })}
        </div>
    );
}
