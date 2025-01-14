# Base Node.js para desarrollo
FROM node:22-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto
EXPOSE 3001

# Comando de inicio
CMD ["npm", "run", "dev"]
