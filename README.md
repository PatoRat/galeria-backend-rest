### Instrucciones para correr el server

- Clonar/pullear repo con exactamente la misma estructura
- Crear .env:
  ```txt
  DATABASE_URL="file:./dev.db"
  PORT=3000
- Dos opciones:
  - Resetear la db con `npx prisma migrate reset` y que recargue la seed de 0. Luego
    correr normal el server con `npm run dev`
  - Usar la db tal cual esta _(con el ejemplo cargado "Manteca", que lo hice con el modal
    de subir un porducto)_, y de ahí hacer lo explicado en el [README.md del repo del Frontend](https://github.com/PatoRat/entrega-tarea-1-ratcliffe/blob/galeria-frontend/README.md)
