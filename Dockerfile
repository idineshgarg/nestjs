FROM node:16
RUN npm install -g concurrently
WORKDIR /app
ADD package*.json /app/
RUN npm install
ADD . /app
EXPOSE 3000
ENV DB_USERNAME=newuser
ENV DB_PASSWORD=password
ENV DB_PORT=5432
ENV DB_HOST=docker.for.mac.host.internal
RUN npm run build
CMD [ "node", "dist/main.js" ]