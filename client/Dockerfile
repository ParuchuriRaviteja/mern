# First stage: build the React application
FROM node:16 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Second stage: copy the build files to the nginx container
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]