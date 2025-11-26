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
- [Referencia de API](#referencia-de-api)

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

# Referencia de API

Las referencias de las APIs para el desarrollo están aquí:

- [🌐 Nwt Globals API](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/globals-api.md)
- [💬 Nwt Dialogs API - Vue2 component](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/dialogs-api.md)
- [💡 Nwt Toasts API - Vue2 component](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/toasts-api.md)
- [⛔️ Nwt Errors API - Vue2 component](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/errors-api.md)
- [🪖 Nwt Asserter API](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/asserter-api.md)
- [🧪 Nwt Tester API](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/tester-api.md)
- [💈 Nwt Randomizer API](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/randomizer-api.md)
- [⚙️ Nwt Settings API](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/settings-api.md)
- [⏰ Nwt Timer API](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/timer-api.md)
- [🧰 Nwt Utils API](https://github.com/allnulled/proyecto-base-001/tree/main/documentation/utils-api.md)