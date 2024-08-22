# Utiliser une image de base Node.js
FROM node:14

# Créer un répertoire de travail
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port que l'application va utiliser
EXPOSE 3001

# Commande pour lancer l'application
CMD ["node", "index.js"]
