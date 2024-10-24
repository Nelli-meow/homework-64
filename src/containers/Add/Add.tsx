import * as React from 'react';
import { useState } from 'react';
import { IPost } from '../../types';

const Add = () => {
  const [post, setPost] = useState<IPost>({
    title: '',
    description: '',
  });

  const [posts, setPosts] = useState<IPost[]>([]);

  const addPost = (e: React.FormEvent) => {
    e.preventDefault();

    if (post.title.length === 0 || post.description.length === 0) {
      alert('Enter valid title and description');
    } else {
      const newPost = { id: String(new Date()), title: post.title, description: post.description };
      setPosts([newPost, ...posts]);
      setPost({ title: '', description: '' });
      console.log(post);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row border border-3 rounded">
        <h1 className="m-3">Add new post</h1>
        <div>
          <form onSubmit={addPost}>
            <div className="m-3">
              <label className="form-label">Title</label>
              <input
                value={post.title}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPost({ ...post, title: e.target.value })}
                className="form-control" />
            </div>
            <div className="m-3">
              <label className="form-label">Description</label>
              <textarea
                value={post.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPost({ ...post, description: e.target.value })}
                className="form-control"></textarea>
            </div>

            <div className="m-3">
              <button type="submit" className="btn btn-outline-info">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
