FROM node:lts-alpine3.14 as builder
RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json

RUN npm install


COPY . /app

RUN npm run build

FROM nginx:1.15.3-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
