import configs from '../Configs/Configurations';

const { searchDomain, photosPerPage } = configs;

const paths = {
    searchPhotosPixabay: (query='people', pageNumber = 1) =>
            `${searchDomain}?key=11709050-d878fb06bc16e19d0cc12ca93&q=${query}&image_type=photo&page=${pageNumber}&per_page=${photosPerPage}&safesearch=true`
}

export default {
    ...paths,
  };