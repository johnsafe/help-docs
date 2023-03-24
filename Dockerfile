FROM nginx:1.23.3-alpine
ADD ${buildFiles} /usr/share/nginx/html
EXPOSE 80 