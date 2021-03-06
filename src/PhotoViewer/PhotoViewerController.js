import { API, paths } from '@api';
export const getPhotos = (query, pageNumber, callback) => {
    const photoSearchPath = paths.searchPhotosPixabay(query, pageNumber);
    // console.log('>>>>>>>', photoSearchPath);
    API.get(photoSearchPath, (error, response) => {
        if ( error ){
            callback(err, null);
        }
        if ( response ){
            callback(null, response);
        }
    });
}