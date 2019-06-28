# Building stage
FROM node:11.9.0 as builder

# Creating workdir
WORKDIR /usr/app

# Copying dependencies
COPY package*.json ./

# Installing the dependencies
RUN npm install --production

# Copying source files
COPY . .

# Building the react app
RUN npm run build

# Stage 2
FROM httpd

COPY --from=builder /usr/app/build /usr/local/apache2/htdocs/

EXPOSE 80

