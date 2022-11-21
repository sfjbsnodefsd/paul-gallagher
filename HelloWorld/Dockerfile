 From node:16
#create app dir
WORKDIR /usr/src/app
#install app dependencies
#A wildcard is used to ensure both package jason and pack-lock.json are copied
#where avaialble(npm@5+)
COPY package*.json ./

RUN npm install
 ENV NODE_VERSION 16.18.1
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]