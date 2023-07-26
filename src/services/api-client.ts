import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '70032310d22549c0b6de92b55340dd11',
  },
});
