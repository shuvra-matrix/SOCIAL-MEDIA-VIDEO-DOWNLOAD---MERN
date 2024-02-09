FROM node:20.11.0

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD npm run dev