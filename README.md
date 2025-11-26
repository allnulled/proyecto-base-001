# proyecto-base-001

Punto de partida para el desarrollo de aplicaciones basadas nw.js.

# Índice

- [proyecto-base-001](#proyecto-base-001)
- [Índice](#índice)
- [Dependencias](#dependencias)
- [Instalación](#instalación)
- [Comandos](#comandos)
  - [Comando 1: iniciar interfaz gráfica](#comando-1-iniciar-interfaz-gráfica)
  - [Comando 2: compilar los fuentes](#comando-2-compilar-los-fuentes)
  - [Comando 3: modo desarrollo](#comando-3-modo-desarrollo)

# Dependencias

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

# Comandos

A continuación se listan los principales comandos del proyecto:

## Comando 1: iniciar interfaz gráfica

Con este otro comando, arrancas la aplicación con `nw.js`:

```sh
npm start
```

Este comando requiere de tener `nw` accesible desde línea de comandos.

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
