FROM awesometic/docusaurus

WORKDIR /workspaces

COPY package.json ./
COPY yarn.lock ./

RUN npm install

VOLUME /workspaces

COPY . .

EXPOSE 3000

CMD [ "npm run start" ]
