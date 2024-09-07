
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const deleteOldPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        console.error('Error in deleting post.');
    }
    return postId; 
}

const DeletePost = () => {
    const queryClient = useQueryClient();
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [ title, SetTitle ] = useState('');
    const [ body, setBody ] = useState('');

    const deletePostMutation = useMutation(postId => deletePost(postId), {
        onMutate: async (postId) => {
          await queryClient.cancelQueries('posts');
          const deleteOldPost = queryClient.getQueryData('posts');
        },
    });

    const handleDelete = () => {
        if (window.confirm('Do you want to delete this post?')) {
            mutate(post.id);
        }
    };

    return (
    <li>
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        <button onClick={handleDelete}>Delete Post?</button>
    </li>
    )
}

export default DeletePost;