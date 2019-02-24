const paths = {
    searchPhotosPexels: (query = 'people', pageNumber = 1, pageSize = 50, ) =>
             `https://api.pexels.com/v1/search?query=${query}&per_page=${pageSize}&page=${pageNumber}`,
    searchPhotosPixabay: (query='people', pageNumber = 1, pageSize = 50) =>
            `https://pixabay.com/api/?key=11709050-d878fb06bc16e19d0cc12ca93&q=${query}&image_type=photo&page=${pageNumber}&per_page=${pageSize}&safesearch=true`
}

export default {
    ...paths,
  };