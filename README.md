# PhotoViewer

# Softwares required
    This is a react native project , which works for both ios and android , below are the prerequisites for running the app
    - Nodejs
    - npm or yarn
    - watchman
    - react-native cli
    - react native

# Reference Guide
https://facebook.github.io/react-native/docs/getting-started

# How to Run the app
   Go inside the folder PhotoViewer and do the below
   ```sh
$ git clone https://github.com/ayyanababu/PhotoViewer.git
$ cd PhotoViewer
$ yarn install or npm run install
$ react-native run-ios
```

# Grid Configuration

   In order to change the Grids Per Row need to do in below place.

   `src->configs->configurations.js` -> change `gridsPerRow`

# Folder Structure

  - Api (src/API)
    - Network calls
    - Paths for the server used to search photos
  - Configs (src/Configs)
    -  constants for NumberOfGrids, API Timeout, NumberofPhotos per page and domains of URL's
  - Branding (src/Branding)
    - AppColors and AppSizes used across the app.
  - PhotoViewer (src/PhotoViewer)
    - Where the search Field and GridComponent is Initialized
  - Grid (src/Grid)
    - Where acutal grid is rendered.
