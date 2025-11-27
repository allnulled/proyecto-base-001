



# Nwt Toasts API

Está expuesta en las globales:

```js
CommonToasts
NwtToasts
NwtFramework.Toasts
Vue.prototype.$nwt.Toasts
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

