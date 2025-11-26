



# Nwt Dialogs API

Está expuesta en las globales:

```js
CommonDialogs
NwtDialogs
Vue.prototype.$dialogs
```

## Crear un diálogo con formulario y extraer la respuesta

```js
const respuesta = await CommonDialogs.open({
    title: "Formulario simple",
    template: `
        <div>
            <input type="text" v-model="user" />
            <input type="password" v-model="password" />
            <hr/>
            <button v-on:click="accept">Aceptar</button>
            <button v-on:click="cancel">Cancelar</button>
        </div>
    `,
    factory: {
        data: {
            user: "",
            password: "",
        }
    }
});
```

