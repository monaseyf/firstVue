FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /app
COPY package.json ./
RUN  npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["http-server", "dist"]

# docker-compose up # to start the compilation process
# to install npm package run
# docker-compose exec web npm i bootstrap
