
class Modal {

  constructor(element) {
    if (!element) {
     alert("Элемент не передан");
     return
    }
      this.element = element;
      this.registerEvents();
  };


  registerEvents() {
    this.element.querySelectorAll('[data-dismiss="modal"]').forEach(element => { 
      element.addEventListener("click", (event) => this.onClose(event));
    });
  };


  onClose(e) {
    e.preventDefault();
    this.close();

  };

  open() {
    this.element.style.display = "block";
  }

  close() {
    this.element.style.display = "";
  }
}