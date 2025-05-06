<!-- ============TASK 1============== -->

Задача 1. Пакування товарів Виконуй це завдання у файлі task-1.js Напиши функцію isEnoughCapacity(products,
containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

Функція оголошує два параметри:

products — об'єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2,
grapes: 4 }. containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер. Функція
має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в
об'єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені
результати її викликів.

console.log( isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8) ); // true

console.log( isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12) ); // false

console.log( isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14) ); // true

console.log( isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7) ); // false

<!-- ====================TASK 2 ======================= -->

Задача 2. Розрахунок калорій Виконуй це завдання у файлі task-2.js Напиши функцію calcAverageCalories(days), яка
повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня. Функція очікує один параметр:
days — масив об'єктів. Кожен об'єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені
результати її викликів.

console.log( calcAverageCalories([ { day: "monday", calories: 3010 }, { day: "tuesday", calories: 3200 }, { day:
"wednesday", calories: 3120 }, { day: "thursday", calories: 2900 }, { day: "friday", calories: 3450 }, { day:
"saturday", calories: 3280 }, { day: "sunday", calories: 3300 } ]) ); // 3180

console.log( calcAverageCalories([ { day: "monday", calories: 2040 }, { day: "tuesday", calories: 2270 }, { day:
"wednesday", calories: 2420 }, { day: "thursday", calories: 1900 }, { day: "friday", calories: 2370 }, { day:
"saturday", calories: 2280 }, { day: "sunday", calories: 2610 } ]) ); // 2270

console.log( calcAverageCalories([]) ); // 0

<!-- =================TASK 3==================== -->

Задача 3. Профіль гравця Виконуй це завдання у файлі task-3.js Об'єкт profile описує профіль користувача на ігровій
платформі. У його властивостях зберігається ім'я профілю username та кількість активних годин playTime, проведених у
грі.

const profile = { username: "Jacob", playTime: 300, };

Доповни об'єкт profile методами для роботи з його властивостями.

Метод changeUsername(newName) повинен приймати рядок (нове ім'я) в параметр newName та змінювати значення властивості
username на нове. Нічого не повертає. Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр
hours та збільшити на нього значення властивості playTime. Нічого не повертає. Метод getInfo() має повертати рядок
формату <Username> has <amount> active hours!, де <Username> — це ім'я профілю, а <amount> — кількість ігрових годин.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені
результати її роботи.

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco"); console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20); console.log(profile.getInfo()); // "Marco has 320 active hours!"
