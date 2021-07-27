import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const key = process.env.REACT_APP_API_KEY;

const fetchImages = ({ searchQuery = "", currentPage = 1 }) => {
  return axios
    .get(
      `?key=${key}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits)
    .catch((error) => console.log(error));
};

export default fetchImages;
