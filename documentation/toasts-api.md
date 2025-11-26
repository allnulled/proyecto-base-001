



# Nwt Toasts API

Está expuesta en las globales:

```js
CommonToasts
NwtToasts
Vue.prototype.$errors
```

## Mostrar un error

```js
CommonToasts.open({
  title: "Titulo",
  text: "texto",
  footer: "Pie de texto opcional"
});
```

