const constants = {
    gridsPerRow: 3,
    photosPerPage: 30,
    apiTimeOut: 20000,
}

const domains = {
    searchDomain: 'https://pixabay.com/api/'
}

export default {
    ...constants,
    ...domains,
}