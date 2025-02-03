# docker run --init --rm --name jwt -w /app -v ./:/app -u 1000:1000 -p 3333:3000 node:18 node app/server.js
# docker run --init --rm --name jwt -v ./:/app -u 1000:1000 -p 3000:3000 holanode 
FROM node:18

# Especificamos nuestro directorio de trabajo
WORKDIR /app

# Copiamos el package.json y el package-lock.json
COPY package*.json ./

# Instalamos las dependencias
RUN npm ci && npm cache clean --force

# Copiamos el resto de los archivos
COPY . .

# Exponemos el puerto 3000
EXPOSE 3000

# Ejecutamos el comando de inicio
CMD ["node", "app/server.js"]