import axios from "axios";

const url = "https://pixabay.com/api/";
const key = "22304923-6eee9d90b3f96a111312c1d99";

const fetchImages = ({ searchQuery = "", currentPage = 1 }) => {
  return axios
    .get(
      `${url}?key=${key}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits)
    .catch((error) => console.log(error));
};

export default fetchImages;
