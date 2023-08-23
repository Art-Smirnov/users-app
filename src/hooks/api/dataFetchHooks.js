import { useEffect, useState } from 'react';
import $ from 'jquery';

const FETCH_URL = 'https://jsonplaceholder.typicode.com/';

export function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [usersError, setUsersError] = useState('');
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  useEffect(() => {
    setIsUsersLoading(true);
    $.get(`${FETCH_URL}users`)
      .done((data) => {
        setUsers(data);
        setIsUsersLoading(false);
      })
      .fail(() => {
        setUsersError('Failed to fetch Users');
        setIsUsersLoading(false);
      });
  }, []);

  return { users, usersError, isUsersLoading };
}

export function useFetchPosts(userId) {
  const [posts, setPosts] = useState([]);
  const [postsError, setPostsError] = useState('');
  const [isPostsLoading, setIsPostsLoading] = useState(true);

  useEffect(() => {
    setIsPostsLoading(true);
    $.get(`${FETCH_URL}posts?userId=${userId}`)
      .done((data) => {
        setPosts(data);
        setIsPostsLoading(false);
      })
      .fail(() => {
        setPostsError('Failed to fetch Posts');
        setIsPostsLoading(false);
      });
  }, [userId]);

  return { posts, postsError, isPostsLoading };
}
