# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /mohan_portfolio

# Copy the app package and package-lock.json file
COPY package*.json /mohan_portfolio/

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src /mohan_portfolio/src
COPY ./public /mohan_portfolio/public

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "build" ]