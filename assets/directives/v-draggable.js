Vue.directive("draggable", {
  inserted(el) {
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;
    const r = el.getBoundingClientRect()
    Fix_draggable_from_the_first_moment: {
      el.style.width = 30 + "%";
      el.style.height = 30 + "%";
    }
    const onMouseDown = function (e) {
      if (!e.target.classList.contains("drag-handle")) {
        return;
      }
      startX = e.clientX;
      startY = e.clientY;
      const r = el.getBoundingClientRect();
      startLeft = r.left;
      startTop = r.top;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };
    const onMouseMove = function (e) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      el.style.position = "fixed";
      el.style.left = (startLeft + dx) + "px";
      el.style.top = (startTop + dy) + "px";
    };
    const onMouseUp = function () {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    el.addEventListener("mousedown", onMouseDown);
  }
});
