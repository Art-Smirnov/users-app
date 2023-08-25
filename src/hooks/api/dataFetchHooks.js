import { useEffect, useState } from 'react';
import $ from 'jquery';

const FETCH_URL = 'https://jsonplaceholder.typicode.com/';

function useFetch(resourceType, userId) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    $.get(`${FETCH_URL}${resourceType}${userId ? `?userId=${userId}` : ''}`)
      .done((response) => {
        setData(response);
        setIsLoading(false);
      })
      .fail(() => {
        setError(`Failed to fetch ${resourceType}`);
        setIsLoading(false);
      });
  }, [resourceType, userId]);

  return { data, error, isLoading };
}

export function useFetchUsers() {
  return useFetch('users');
}

export function useFetchPosts(userId) {
  return useFetch('posts', userId);
}

export function useFetchAlbums(userId) {
  return useFetch('albums', userId);
}
