/**
 * 
 * # Nwt Injection API
 * 
 * Con `NwtInjection`...
 * 
 */


window.addEventListener("load", function () {
    trace("Nwt injection on Vue.prototype.$*");
    Vue.prototype.$window = window;
    Vue.prototype.$nwt = NwtFramework;
    Vue.prototype.$tracer = NwtTracer.global;
    Vue.prototype.$trace = NwtTracer.global.createTrace();
    new Vue({
        render: h => h(Vue.options.components.MainWindow),
    }).$mount("#app");
});