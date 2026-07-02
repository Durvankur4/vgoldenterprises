FROM node:18-alpine

WORKDIR /app

# Install dependencies first (copies only package files for better cache)
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Vite default port
EXPOSE 5173

# Start dev server accessible from host
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
