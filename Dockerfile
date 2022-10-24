# pull the base image
FROM node:alpine


# set the working direction
WORKDIR /app


# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH


# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# clear the npm cache to prevent install errors
RUN npm cache clean --force

# install the latest npm
RUN npm install -g npm@latest
RUN npm install react-scripts@3.4.1 -g 


# add app
COPY . ./


# start app
CMD ["npm", "start"]