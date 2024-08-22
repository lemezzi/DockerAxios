# Utiliser une image de base Node.js pour builder l'application
FROM node:14 as build

# Créer un répertoire de travail
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Construire l'application
RUN npm run build

# Utiliser une image Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers buildés dans le dossier par défaut de Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
