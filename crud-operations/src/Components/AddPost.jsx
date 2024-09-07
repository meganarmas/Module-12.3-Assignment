import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Col, Form } from 'react-bootstrap';

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
    const [ title, SetTitle ] = useState('');
    const [ body, setBody ] = useState('');

    const {} = useMutation({
        mutationFn: createPost,
        onSuccess: (data) =>{
            setShowSuccessAlert(true);
            console.log('Post is added.')
            queryClient.invalidateQueries(['title']);
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        createPost.mutate({ title, body })
    };

    return (
        <div>
            <Col md={3}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Post Title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter post's title" name="title" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Body:</Form.Label>
                        <Form.Control type="text" placeholder="Body of post" name="body" required />
                    </Form.Group>
                    <Button type="submit" onSubmit={handleSubmit}>Post</Button>
            </Form>
            </Col>
        </div>
    )
}

export default AddPost;