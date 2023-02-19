"use strcit";
const body = document.querySelector("body");

// Создать функцию-конструктор DomElement, которая содержит свойства
// - selector,
// - height,
// - width,
// - bg,
// - fontSize
const DomElement = function (selector, height, width, bg, fontSize) {
  (this.selector = selector),
    (this.height = height),
    (this.width = width),
    (this.bg = bg),
    (this.fontSize = fontSize),
    // содержит метод, который создает элемент на странице в зависимости от условия:
    // - если строка selector начинается с точки, создаем div с классом
    // - если строка selector начинается с решетки # то создаем параграф с id
    (this.createElem = function () {
      let newElement;
      if (this.selector[0] == ".") {
        newElement = document.createElement("div");
        newElement.classList.add(this.selector.substring(1));
        body.append(newElement);
      } else if (this.selector[0] == "#") {
        newElement = document.createElement("p");
        newElement.id = this.selector.substring(1);
        body.append(newElement);
      }
      newElement.textContent =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
      newElement.style.height = this.height + "px";
      newElement.style.width = this.width + "px";
      newElement.style.background = this.bg;
      newElement.style.fontSize = this.fontSize + "px";
    });
};

// Создать новый объект на основе класса DomElement
const newObject = new DomElement("#div", 250, 1000, "yellow", 21);
// Вызвать его метод чтобы создать элемент на странице
newObject.createElem();
