# Use a temporary image to copy .env file
FROM node:lts-alpine3.11 as temp_builder
WORKDIR /app
COPY github-finder-client/package.json /app/package.json
RUN apk add --no-cache git
RUN npm i



 COPY /Variables/.env /app/.env


 COPY github-finder-client/ /app


 RUN npm run build


 FROM nginx:1.15.3-alpine


 COPY --from=temp_builder /app/.env /app/.env

 COPY --from=temp_builder /app/build /usr/share/nginx/html
 COPY github-finder-client/default.conf /etc/nginx/conf.d/default.conf
 EXPOSE 80
 CMD ["nginx", "-g", "daemon off;"]
