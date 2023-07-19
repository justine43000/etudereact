import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { postStore } from "../lib/store/postStore";


export function SingleArticle() {
    const { posts, currentPost, setCurrentPost } = postStore();
    const [auteur, setAuteur] = useState(null);


    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const currPost = posts.find((post) => post.id === Number(id));
        setCurrentPost(currPost);

        axios.get(`https://jsonplaceholder.typicode.com/users/${currPost.userId}`)
            .then((auteurResponse) => {
                setAuteur((auteurResponse.data))
            })
    }, []);


    return (
        <div>
            <button onClick={() => navigate(-1)}>Retour liste des posts</button>
            {currentPost && auteur ? (
                <div>
                    <h1>Article n°{id}</h1>
                    <h2>{auteur.name}</h2>
                    <h2>{currentPost.title}</h2>
                    <p>{currentPost.body}</p>
                </div>
            ) : (
                <div>
                    <h2>Il n'y a pas de données</h2>
                </div>
            )}
        </div>
    );
}