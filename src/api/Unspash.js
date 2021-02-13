import axios from 'axios';

const apiKey = 'Nog3-B4QyhGZn26twcyzBn_dADktH9RPOIB9ETlmeSo';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
});
