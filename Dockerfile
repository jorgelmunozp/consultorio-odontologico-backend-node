# Usar la imagen oficial de Node.js basada en Alpine
FROM node:20-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install --only=production

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que la aplicación escuchará
EXPOSE 3000

# Definir el comando para iniciar la aplicación
CMD ["npm", "start"]
