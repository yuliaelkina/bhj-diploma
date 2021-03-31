class Sidebar {

  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  };

  static initToggleButton() {
    document.querySelector(".sidebar-toggle").addEventListener("click", ()=> {
      document.querySelector("body").classList.toggle("sidebar-open");
      document.querySelector("body").classList.toggle("sidebar-collapse");
  });
  };
  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector(".menu-item_login").addEventListener("click", () => {
      const logIn = new Modal(document.getElementById("modal-login"));
      logIn.open();
    });
    document.querySelector(".menu-item_register").addEventListener("click", () => {
      const registrationModal = new Modal(document.getElementById("modal-register"));
      registrationModal.open();
    });
    document.querySelector(".menu-item_logout").addEventListener("click", () => {
      User.logout();
      App.setState("init");
    }); 
  }
};

Sidebar.init();