import * as React from 'react';
import PostForm from '../../components/PostForm/PostForm.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPosts, IPostsApi } from '../../types';
import axiosApi from '../../axiosAPI.ts';
import Loader from '../../components/UI/Loader.tsx';

const EditPost = () => {
  const [post, setPost] = useState<IPosts>();
  const params = useParams<{idPost: string}>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOnePost = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const response = await axiosApi.get<IPostsApi>(`posts/${id}.json`);
      if (response.data) {
        setPost(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
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
        setLoading(true);
        await axiosApi.put(`posts/${params.idPost}.json`, {...post});
      }
      navigate('/');

    } catch(error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? <Loader/> :
        <>
          {post ?
          <>
            <PostForm postToEdit={post} submitForm={submitForm}/>
          </>
            :
            <p>Post id not found :(</p>
          }
        </>
      }

    </div>
  );
};

export default EditPost;