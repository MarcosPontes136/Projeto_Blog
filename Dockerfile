# Estágio de compilação
FROM node:21 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/proj_blog /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Estágio de compilação
#FROM node:lts-alpine as node
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm install @angular/cli -g
#EXPOSE 4200
#CMD [ "ng", "serve", "--host", "0.0.0.0" ]


