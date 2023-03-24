FROM alibaba-atom-cs-registry.cn-beijing.cr.aliyuncs.com/openatom-atomgit/nginx:1.23.3-alpine
ADD ./build /usr/share/nginx/html
EXPOSE 80