



# Nwt Toasts API

Está expuesta en las globales:

```js
CommonToasts
NwtToasts
Vue.prototype.$toasts
```

## Mostrar un mensaje emergente:

```js
CommonToasts.show({
  title: "Titulo",
  text: "texto",
  footer: "Pie de texto opcional",
  timeout: 5000,
});
```

