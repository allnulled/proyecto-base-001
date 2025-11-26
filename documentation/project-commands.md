# Nwt Project Commands

Los comandos de proyecto son:

# Índice

- [Nwt Project Commands](#nwt-project-commands)
- [Índice](#índice)
  - [Comando 1: iniciar interfaz gráfica](#comando-1-iniciar-interfaz-gráfica)
  - [Comando 2: compilar los fuentes](#comando-2-compilar-los-fuentes)
  - [Comando 3: modo desarrollo](#comando-3-modo-desarrollo)
  - [Comando 4: compilar la documentación](#comando-4-compilar-la-documentación)

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

## Comando 4: compilar la documentación

Para volver a construir la documentación:

```sh
npm run build:docs
```