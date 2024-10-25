import * as React from 'react';
import PostForm from '../../components/PostForm/PostForm.tsx';
import { IPosts } from '../../types';
import axiosApi from '../../axiosAPI.ts';

const NewPost = () => {

  const submitForm = async (post: IPosts) => {
    await axiosApi.post('posts.json', {...post});
  }

  return (
    <>
      <PostForm submitForm={submitForm}/>
    </>
  );
};

export default NewPost;