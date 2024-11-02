# Usa una imagen base de Node.js
FROM node:22.11.0

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Instala un servidor web simple para servir la aplicación construida
RUN npm install -g serve

# Expone el puerto en el que la aplicación correrá
EXPOSE 4000

# Comando para ejecutar la aplicación, especificando el puerto 4000
CMD ["serve", "-s", "build", "-l", "4000"]
