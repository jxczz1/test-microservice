# Usa una imagen base de Node.js versión 22.11.0
FROM node:22.11.0

# Instala las herramientas necesarias para compilar módulos nativos
RUN apt-get update && apt-get install -y build-essential python3

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación correrá
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
