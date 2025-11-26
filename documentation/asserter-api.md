# Nwt Asserter API

Se expone a través de:

```js
NwtAsserter
NwtAsserter.global // instancia
assertion // instancia
NwtAsserter.global === assertion
```

Se usa así:

```js
assertion(1 === 2, "1 must equal 1");
```

Para personalizar el gestor de errores y aciertos:

```js
assertion.setErrorCallback(error => {
  // Do something with the AssertionError
});
assertion.setSuccessCallback(errorMessage => {
  // Do something with the success and the non-thrown error message
});
```

Puedes crear un nuevo assertion así:

```js
const otherAssertion = NwtAsserter.createAssertion((message) => {
  console.log("[*] Assertion succeded: " + message);
}, error => {
  console.log("[!] Assertion failed: " + error.message);
});
otherAssertion(true, "Assertion 1");
otherAssertion(true, "Assertion 2");
otherAssertion(false, "Assertion 3");
```

