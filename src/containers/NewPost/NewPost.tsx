import * as React from 'react';
import PostForm from '../../components/PostForm/PostForm.tsx';
import { IPosts } from '../../types';
import axiosApi from '../../axiosAPI.ts';
import { useState } from 'react';
import Loader from '../../components/UI/Loader.tsx';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitForm = async (post: IPosts) => {
    try {
      setLoading(true);
      await axiosApi.post('posts.json', {...post});
      navigate('/');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? <Loader/> : <PostForm submitForm={submitForm}/>}
    </>
  );
};

export default NewPost;