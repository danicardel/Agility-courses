# Agility Planos – PWA privada

App personal para gestionar planos de agility (diagramas de recorridos).

## Estructura de carpetas en Google Drive

```
AGILITY-COURSES/
└── Agility-Planos/
    ├── Inbox/          ← fotos nuevas
    ├── Revisar/        ← cola de validación
    ├── Clasificadas/   ← ya validados y organizados
    └── Archivo/        ← antiguos / descartados
```

## Estado actual (Parte 1)

- [x] Estructura HTML + CSS responsive (móvil primero)
- [x] Navegación entre vistas (Inbox, Revisar, Clasificadas, Archivo, Config)
- [x] Modal de validación (formulario completo)
- [x] Manifest + Service Worker (instalable)
- [ ] Conexión Google Drive (Parte 2)
- [ ] OCR + clasificación automática (Parte 3)
- [ ] Iconos definitivos

## Cómo probar ahora (Parte 1)

### Opción A – En el ordenador (rápido)

1. Abre una terminal en la carpeta del proyecto:
   ```bash
   cd agility-planos-pwa
   ```
2. Sirve los archivos con cualquier servidor estático, por ejemplo:
   ```bash
   # Con Python
   python3 -m http.server 8080
   ```
3. Abre en el navegador: `http://localhost:8080`

### Opción B – En el móvil Android (para probar como PWA)

1. Sube la carpeta `agility-planos-pwa` a cualquier hosting estático (GitHub Pages, Netlify, Vercel, o incluso un servidor local con ngrok).
2. Abre la URL en Chrome de Android.
3. Menú → **“Añadir a la pantalla de inicio”** / **“Instalar aplicación”**.

> Nota: Los iconos todavía son placeholders. En la siguiente parte los generamos bien.

## Próxima parte (Parte 2)

- Autenticación OAuth con Google Drive
- Detección de la carpeta `AGILITY-COURSES/Agility-Planos`
- Listado de fotos de Inbox
- Subida de fotos desde el móvil a Inbox

---

Uso estrictamente personal.
