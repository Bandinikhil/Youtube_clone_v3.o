import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    part: 'snippet', videoId: 'M7FIvfx5J10',
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '711ce6dc52mshc27a40cda529d30p118ddfjsn14d9bddb0015',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
//process.env.REACT_APP_RAPID_API_KEY
