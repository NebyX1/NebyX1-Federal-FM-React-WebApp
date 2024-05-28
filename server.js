import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sirve archivos estáticos de la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Configura el proxy para las solicitudes de audio
app.use('/api', createProxyMiddleware({
  target: 'http://usa15.ciudaddigital.com.uy:8040',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remueve el prefijo /api
  },
}));

// Para todas las demás rutas, sirve el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});