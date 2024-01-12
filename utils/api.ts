import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: apiKey,
  },
});

export const getTrendingShows = async () => {
  const response = await fetch(`${API_BASE_URL}/trending/tv/week?api_key=${apiKey}`);
  return response.json();
};

export default api;
