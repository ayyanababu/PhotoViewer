import { API, paths } from '@api';
export const getPhotos = (query, pageNumber, callback) => {
    const photoSearchPath = paths.searchPhotosPixabay(query, pageNumber);
    API.get(photoSearchPath, (error, response) => {
        if ( error ){
            callback(err, null);
            return;
        }

        if ( response ){
            callback(null, response);
        }
    });
}