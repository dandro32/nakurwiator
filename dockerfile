# base image
FROM node:9.6.1
MAINTAINER Daniel Drozdzel <daniel.drozdzel@gmail.com>

# add node_modules/.bin to $PATH
ENV PATH /usr/src/front/node_modules/.bin:$PATH

# working dir
RUN mkdir /usr/src/front
WORKDIR /usr/src/front

# install and copy deps
COPY package.json /usr/src/front/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start to nakurwiac
CMD ["npm", "start"]




