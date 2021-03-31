
class Modal {

  constructor(element){
    if (element) {
      this.element = element;
      this.registerEvents();
    }
    else {
      console.log("Элемент не существует");
    };
  };


  registerEvents() {
    this.element.querySelectorAll('[data-dismiss="modal"]').forEach(element => { 
      element.addEventListener("click", (event) => {this.onClose(event);});
    });
  };


  onClose(e) {
    e.preventDefault();
    this.close();

  };

  open() {
    this.element.style.display = "block";
  };

  close() {
    this.element.style.display = "";
  }
}