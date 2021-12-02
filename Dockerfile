FROM node:14.17.3-alpine AS build

WORKDIR /frontend
COPY ./package.json ./yarn.lock ./
RUN yarn
COPY . .

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /frontend/build /usr/share/nginx/frontend
EXPOSE 3333