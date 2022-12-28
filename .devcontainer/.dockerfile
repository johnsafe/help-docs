FROM awesometic/docusaurus

WORKDIR /docusaurus

COPY package.json ./
COPY yarn.lock ./

RUN npm install

VOLUME /docusaurus

COPY . .

EXPOSE 3000

CMD [ "npm run start" ]
