import * as React from 'react';
import { useEffect, useState } from 'react';
import { IPost, IPosts } from '../../types';
import axiosApi from '../../axiosAPI.ts';

const initialFrom = {
  title: '',
  description: '',
}

interface Props {
  postToEdit?: IPost;
  submitForm: (post: IPosts) => void;
}

const PostForm: React.FC<Props> = ({postToEdit, submitForm}) => {
  const [post, setPost] = useState<IPost>({...initialFrom});

  useEffect(() => {
    if(postToEdit) {
      setPost(prevState => ({
        ...prevState,
        ...postToEdit,
      }));
    }
  },[postToEdit])

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setPost(prevState => ({
      ...prevState,
      [name]: value
    }));

  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitForm({...post, date: String(new Date())});


    if(!postToEdit) {
      setPost({...initialFrom});
    }
  };

  return (
    <div className="container mt-5">
      <div className="row border border-3 rounded">
        <h1 className="m-3">{postToEdit ? 'Edit' : 'Save new'} post</h1>
        <div>
          <form onSubmit={onSubmitForm}>
            <div className="m-3">
              <label className="form-label">Title</label>
              <input
                name="title"
                value={post.title}
                type="text"
                onChange={onChangeField}
                className="form-control" />
            </div>
            <div className="m-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                value={post.description}
                onChange={onChangeField}
                className="form-control"/>
            </div>

            <div className="m-3">
              <button type="submit" className="btn btn-outline-info">{postToEdit ? 'Edit' : 'Save'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
