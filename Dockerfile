FROM nginx:1.18-alpine

COPY ./build /var/www
COPY staging-nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
