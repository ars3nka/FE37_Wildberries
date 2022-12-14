function createElement(type = 'div', options = {}) {
  const element = document.createElement(type);
  if (options.textContent) {
    element.textContent = options.textContent;
  }
  if (options.className) {
    element.className = options.className;
  }
  if (options.src) {
    element.src = options.src;
  }
  if (options.id) {
    element.id = options.id;
  }

  return element;
}
export default createElement;
