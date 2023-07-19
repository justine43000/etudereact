import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postStore } from '../lib/Store/postStore';

export function Add() {
    const navigate = useNavigate();
    const { addPost } = postStore();

    const [formValue, setFormValue] = useState({
        title: '',
        body: '',
    });

    const handleFormSubmitAdd = (event) => {
        event.preventDefault();

        addPost(formValue);
        navigate(-1);
    };

    const handleChange = (event) =>
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });

    return (
        <div>
            <form onSubmit={handleFormSubmitAdd}>
                <input type="text" name="title" onChange={handleChange} value={formValue.title} placeholder="titre" />
                <input type="text" name="body" onChange={handleChange} value={formValue.body} placeholder="text" />

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}
