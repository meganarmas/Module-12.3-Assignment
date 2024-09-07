import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts' {
        method: "GET",
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(newPost),
    });
}

const ViewPosts = () => {
    const queryClient = useQueryClient();
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
}
    

export default CrudOperation;