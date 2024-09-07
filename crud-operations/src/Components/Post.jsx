import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/{postId}.`, {
        method: "GET",
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(newPost),
    });
    if (!response.ok) {
        console.error('Error in adding post.');
    }
    return response.json(); 
};

const ViewPosts = () => {
    const queryClient = useQueryClient();
    const { data: posts, isLoading, error } = useQuery('posts', fetchPost);

    const handleEdit = id => {
        setEditPostId(id)
    }
};
    

export default CrudOperation;