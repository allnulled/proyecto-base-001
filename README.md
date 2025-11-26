# proyecto-base-001

Punto de partida para el desarrollo de aplicaciones basadas nw.js.

# Índice

- [proyecto-base-001](#proyecto-base-001)
- [Índice](#índice)
- [Dependencias previas](#dependencias-previas)
- [Instalación](#instalación)
- [Comandos del proyecto](#comandos-del-proyecto)
  - [Comando 1: iniciar interfaz gráfica](#comando-1-iniciar-interfaz-gráfica)
  - [Comando 2: compilar los fuentes](#comando-2-compilar-los-fuentes)
  - [Comando 3: modo desarrollo](#comando-3-modo-desarrollo)
- [Principales APIs](#principales-apis)
  - [API de Diálogos](#api-de-diálogos)
  - [API de Mensajes emergentes](#api-de-mensajes-emergentes)
  - [API de Errores](#api-de-errores)

# Dependencias previas

Se necesita tener accesible desde línea de comandos:

- `npm` y `node`: [https://nodejs.org/en/download](https://nodejs.org/en/download)
- `nw`: [https://nwjs.io/](https://nwjs.io/)

# Instalación

Primero, clonar el proyecto:

```sh
git clone https://github.com/allnulled/proyecto-base-001.git .
```

Segundo, instalar dependencias de `node_modules`:

```sh
npm run install:all
```

# Comandos del proyecto

A continuación se listan los principales comandos del proyecto:

## Comando 1: iniciar interfaz gráfica

Con este otro comando, arrancas la aplicación con `nw.js`:

```sh
npm start
```

Este comando requiere de tener `nw` accesible desde línea de comandos.

Opcionalmente, si quieres personalizar la ruta de `nw`, puedes cambiar el valor de este comando en el `package.json`:

```sh
npm run ui:own
```

## Comando 2: compilar los fuentes

Con este otro comando, compilas el código fuente:

```sh
npm run build
```

## Comando 3: modo desarrollo

Para el modo desarrollo necesitas 3 consolas abiertas.

La primera consola para compilar automáticamente al detectar cambios:

```sh
npm run dev
```

La segunda consola para refrescar automáticamente:

```sh
npm run refresh
```

La tercera consola sería para arrancar la interfaz gráfica:

```sh
npm start
```

# Principales APIs

A continuación se exponen las APIs globales principales.

## API de Diálogos

Para mostrar un diálogo:

```js
const respuesta = await CommonDialogs.open({
    title: "Título del diálogo",
    template: "<div>Contenido</div>",
});
```

La global `CommonDialogs` también está accesible:

- globalmente desde `Vue.prototype.$dialogs`
- localmente desde `this.$dialogs` en un componente

## API de Mensajes emergentes

Para mostrar un mensaje emergente:

```js
const respuesta = await CommonToasts.open({
    title: "Título del diálogo",
    template: "<div>Contenido</div>",
});
```

La global `CommonToasts` también está accesible:

- globalmente desde `Vue.prototype.$toasts`
- localmente desde `this.$toasts` en un componente

## API de Errores

Para mostrar un mensaje emergente:

```js
const respuesta = await CommonErrors.open({
    title: "Título del diálogo",
    template: "<div>Contenido</div>",
});
```

La global `CommonErrors` también está accesible:

- globalmente desde `Vue.prototype.$errors`
- localmente desde `this.$errors` en un componente