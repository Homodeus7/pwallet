FROM --platform=linux/amd64 node:16 
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080
CMD yarn build && yarn serve