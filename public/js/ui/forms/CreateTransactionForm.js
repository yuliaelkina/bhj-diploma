/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    if (User.current() != undefined) {
      Account.list(User.current(), (err, response) => {
        if (response.success) {
          this.element.querySelector(".accounts-select").innerHTML = "";
          response.data.forEach((el) => { 
            this.element.querySelector(".accounts-select").innerHTML += `<option value="${el.id}">${el.name}</option>`
          })
        }
        else {
          alert(err);
        };
      })
    }
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if (response.success) {
        this.element.reset();
        App.update();
        if (this.element.id == "new-income-form") {
          App.getModal("newIncome").close();
        }
        else {
          App.getModal("newExpense").close();
        }
      }
      else {
        alert(err);
      }
    })
  }
}