import React,  {useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const getAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    console.error('Error in connection')
  }
  return response.json();

};

const updatePost = async (updatedPost) => {
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

const UpdateAPost = () => {
  const queryClient = useQueryClient();
  const [selectedPost, setSelectedPost] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { data: posts, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  });

 const limitedPosts = posts ? posts.slice(0, 5) : [];

  const mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setTitle(post.title);
    setBody(post.body);
  };

  const handleUpdatePost = (e) => {
    e.preventDefault();
    if (selectedPost) {
      mutation.mutate({... selectedPost, title, body });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault
    if (postId) {
      mutation.mutate(postId);
    }

  };

    return (
      <div>
        <ul>
          {limitedPosts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => handleSelectPost(post)}>Edit</button>
              <button onClick={() => handleDelete(post)}>Delete</button>
            </li>
          ))}
        </ul>
        {selectedPost && (
        <form onSubmit={handleUpdatePost}>
          <h2>Edit or Delete Post</h2>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button type="submit">Update Post</button>
        </form>
      )}
    </div>
    )
  };

export default UpdateAPost;