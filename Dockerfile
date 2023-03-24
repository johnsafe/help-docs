FROM alibaba-atom-cs-registry-vpc.cn-beijing.cr.aliyuncs.com/openatom-atomgit/node:16.18.1-alpine3.15
ADD ./build /usr/share/nginx/html
EXPOSE 80