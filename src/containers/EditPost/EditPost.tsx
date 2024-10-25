import * as React from 'react';
import PostForm from '../../components/PostForm/PostForm.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPosts, IPostsApi } from '../../types';
import axiosApi from '../../axiosAPI.ts';

const EditPost = () => {
  const [post, setPost] = useState<IPosts>();
  const params = useParams<{idPost: string}>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOnePost = useCallback(async (id: string) => {
    try {
      const response = await axiosApi.get<IPostsApi>(`posts/${id}.json`);

      if (response.data) {
        setPost(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    if(params.idPost) {
      void fetchOnePost(params.idPost)
    }
  },[params.idPost, fetchOnePost]);

  const submitForm = async (post: IPosts) => {
    try {
      if(params.idPost) {
        await axiosApi.put(`posts/${params.idPost}.json`, {...post});
      }
      navigate('/');

    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div>
      <PostForm postToEdit={post} submitForm={submitForm}/>
    </div>
  );
};

export default EditPost;