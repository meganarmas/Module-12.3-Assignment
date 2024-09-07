import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts.`, {
        method: "POST",
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(newPost),
    });
    if (!response.ok) {
        console.error('Error in adding post.');
    }
    return response.json(); 
}

const AddPost = () => {
    const queryClient = useQueryClient();
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const { mutate, isLoading, isError, error} = useMutation({
        mutationFn: getPost,
        onSuccess: (data) =>{
            setShowSuccessAlert(true);
            console.log('Post is added.')
            queryClient.invalidateQueries(['title'])
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        createPost.mutate({ title, body })
    }
}

export default AddPost;