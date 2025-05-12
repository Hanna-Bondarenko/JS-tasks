<!-- ================ TASK-1 ========================== -->

Задача 1. Акаунт користувача

Виконуй це завдання у файлі task-1.js

Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай
рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики методів. У консоль будуть
виведені результати їх роботи. Будь ласка, нічого там не змінюй.

const customer = { username: "Mango", balance: 24000, discount: 0.1, orders: ["Burger", "Pizza", "Salad"], // Change
code below this line getBalance() { return balance; }, getDiscount() { return discount; }, setDiscount(value) { discount
= value; }, getOrders() { return orders; }, addOrder(cost, order) { balance -= cost - cost \* discount;
orders.push(order); }, // Change code above this line };

customer.setDiscount(0.15); console.log(customer.getDiscount()); // 0.15 customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750 console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

На що звертати увагу при перевірці:

Оголошена змінна customer Значення змінної customer — це об'єкт із властивостями та методами Виклик
customer.getDiscount() повертає поточне значення властивості discount Виклик customer.setDiscount(0.15) оновлює значення
властивості discount Виклик customer.getBalance() повертає поточне значення властивості balance. Виклик
customer.getOrders() повертає поточне значення властивості orders Виклик customer.addOrder(5000, "Steak") додає "Steak"
у масив значень властивості orders та оновлює баланс Метод getBalance об'єкта customer використовує this Метод
getDiscount об'єкта customer використовує this Метод setDiscount об'єкта customer використовує this Метод getOrders
об'єкта customer використовує this Метод addOrder об'єкта customer використовує this

<!-- ================= TASK-2 ================== -->

Задача 2. Склад

Виконуй це завдання у файлі task-2.js

Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент —
початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

Оголоси наступні методи класу:

getItems() — повертає масив поточних товарів у приватній властивості items. addItem(newItem) — приймає новий товар
newItem і додає його до масиву товарів у приватну властивість items об'єкта. removeItem(itemToRemove) — приймає рядок з
назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.

Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки
коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]); console.log(storage.getItems()); //
["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid"); console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger"); console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner"); console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

На що звертати увагу при перевірці:

Оголошений клас Storage У класі Storage оголошений метод getItems У класі Storage оголошений метод addItem У класі
Storage оголошений метод removeItem Властивість items у класі Storage оголошена приватною Метод getItems повертає
значення приватної властивості items екземпляра класу, який його викликає Метод addItem змінює значення приватної
властивості items екземпляра класу, який його викликає Метод removeItem змінює значення приватної властивості items
екземпляра класу, який його викликає У результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"])
значення змінної storage — це об'єкт У об'єкта storage немає публічної властивості items Перший виклик
storage.getItems() одразу після ініціалізації екземпляра повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
Другий виклик storage.getItems() після виклику storage.addItem("Droid") повертає масив ["Nanitoids", "Prolonger",
"Antigravitator", "Droid"] Третій виклик storage.getItems() після виклику storage.removeItem("Prolonger") повертає масив
["Nanitoids", "Antigravitator", "Droid"] Четвертий виклик storage.getItems() після виклику storage.removeItem("Scaner")
повертає масив ["Nanitoids", "Antigravitator", "Droid"]

<!-- =================== TASK-3 ========================= -->

Задача 3. Конструктор рядків

Виконуй це завдання у файлі task-3.js

Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну
властивість value об'єкта, що створюється.

Оголоси наступні методи класу:

getValue() — повертає поточне значення приватної властивості value. padEnd(str) — отримує параметр str (рядок) і додає
його в кінець значення приватної властивості value об'єкта, який викликає цей метод. padStart(str) — отримує параметр
str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод. padBoth(str)
— отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який
викликає цей метод. Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу
для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

const builder = new StringBuilder("."); console.log(builder.getValue()); // "." builder.padStart("^");
console.log(builder.getValue()); // "^." builder.padEnd("^"); console.log(builder.getValue()); // "^.^"
builder.padBoth("="); console.log(builder.getValue()); // "=^.^="

На що звертати увагу при перевірці:

Оголошений клас StringBuilder Властивість value у класі StringBuilder оголошена приватною У класі StringBuilder
оголошений метод getValue Метод getValue повертає значення приватної властивості value екземпляра класу, який його
викликає У класі StringBuilder оголошений метод padEnd Метод padEnd змінює значення приватної властивості value
екземпляра класу, який його викликає У класі StringBuilder оголошений метод padStart Метод padStart змінює приватну
властивість value екземпляра класу, який його викликає У класі StringBuilder оголошений метод padBoth Метод padBoth
змінює значення приватної властивості value екземпляра класу, який його викликає У результаті виклику new
StringBuilder(".") значення приватної змінної builder — це об'єкт Об'єкт builder не містить публічну властивість value
Перший виклик builder.getValue() одразу після ініціалізації екземпляра повертає рядок . Другий виклик builder.getValue()
після виклику builder.padStart("^") повертає рядок ^. Третій виклик builder.getValue() після виклику builder.padEnd("^")
повертає рядок ^.^ Четвертий виклик builder.getValue() після виклику builder.padBoth("=") повертає рядок =^.^=
