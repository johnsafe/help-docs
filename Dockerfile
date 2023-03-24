FROM nginx:1.23.3-alpine
RUN echo ${buildFiles}
ADD ${buildFiles} /usr/share/nginx/html
RUN echo ${buildFiles}
EXPOSE 80 