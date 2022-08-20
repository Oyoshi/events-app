FROM node
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lock
COPY . .
CMD ["yarn", "start"]
