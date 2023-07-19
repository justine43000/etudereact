import React, { useState } from 'react';
import { postStore } from '../lib/store/postStore';
import { useNavigate } from 'react-router-dom';

export function Edit() {
    const navigate = useNavigate();
    const { currentPost, updatePost } = postStore();

    const [formValue, setFormValue] = useState({
        title: currentPost.title,
        body: currentPost.body,
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const postUpdate = {
            ...currentPost,
            ...formValue,
        };

        updatePost(postUpdate);
        navigate(-1);
    };

    const handleChange = (event) =>
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="title" onChange={handleChange} value={formValue.title} />
                <input type="text" name="body" onChange={handleChange} value={formValue.body} />

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}