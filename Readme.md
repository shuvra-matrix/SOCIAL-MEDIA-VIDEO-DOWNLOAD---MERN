# Vidown - Video Downloader Web App

**Vidown** is a powerful web application that enables you to effortlessly download publicly accessible videos from popular social media platforms, including Twitter, YouTube, Facebook, and Instagram. Built with a robust backend in Node.js and a responsive frontend in React.js, Vidown provides a seamless and user-friendly video downloading experience.

![demo image](https://github.com/shuvra-matrix/images/blob/main/Screenshot%202024-02-09%20212655.png?raw=true)

## Live Demo

[https://vidown.netlify.app/](https://vidown.netlify.app/)

## Features

- Download videos from Twitter, YouTube, Facebook, and Instagram effortlessly.
- Utilizes Node.js for the efficient management of video fetching.
- Employs React.js to create a responsive and intuitive user interface.

## Installation

To install and run this app locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/shuvra-matrix/SOCIAL-MEDIA-VIDEO-DOWNLOAD---MERN.git

   ```

2. Install the dependencies for the server by navigating to the server folder:

   ```bash
   cd ./server
   npm install

   ```

3. Set up environment variables by creating a .env file in the "server" folder with the following content:

   ```bash
   YT_API_KEY=your_youtube_api_key
   TW_API_KEY=your_twitter_api_key
   FB_API_KEY=your_facebook_api_key
   IG_API_KEY=your_instagram_api_key

   ```

4. Start the server by running the following command:

   ```bash
   npm start
   ```

This will launch the server and make it accessible at [http://localhost:3030](http://localhost:3030).

4. Install the dependencies for the frontend by navigating to the public folder:

   ```bash
   cd ./public
   npm install

   ```

5. Start the React app by running the following command:

   ```bash
   npm start
   ```

6. You can use the following APIs to integrate YouTube and Twitter video download functionality into your backend:

   YouTube Video Download API: https://rapidapi.com/ytjar/api/yt-api/pricing

   Twitter Video Download API: https://rapidapi.com/omarmhaimdat/api/twitter154

   Facebook Video Download API: https://rapidapi.com/hyoga/api/facebook-video-audio-download

   Instagram Video Download API: https://rapidapi.com/emmanueldavidyou/api/fb-video-reels

This will start the frontend of the app and make it accessible at [http://localhost:3000](http://localhost:3000).

## Using Docker

If you have Docker installed, you can easily run Vidown using Docker Compose. Follow the steps below:

1. Make sure you have Docker and Docker Compose installed on your system.

2. In the server directory of the project, create a `.env` file with the necessary API keys as mentioned in the installation steps.

3. Open a terminal and run the following command to start Vidown using Docker Compose:

   ```bash
   docker-compose -f ./docker-compose.yaml up
   ```

   This command will build the Docker images and start the containers.

4. Vidown will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

1. Open your web browser and go to http://localhost:3000 to access Vidown.

2. Enter the URL of the video you want to download from Twitter, YouTube, Facebook, or Instagram into the provided input field.

3. Click the "Download" button, and Vidown will retrieve and offer the video for download.

4. Save the video to your desired location on your local device.

## Disclaimer

#### Please note: Vidown is intended for personal use only and should be used in compliance with the terms of service of the respective social media platforms. Downloading copyrighted material without permission may violate copyright laws.

#### By using Vidown, you acknowledge and agree that you are solely responsible for your actions and will use the app responsibly and within legal boundaries.

## Contributing

We welcome contributions from the community to help improve Vidown. Feel free to submit bug reports, feature requests, or pull requests.
