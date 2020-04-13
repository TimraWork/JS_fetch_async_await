# JS_fetch_async_await
JS lesson by Minin - https://youtu.be/SHiUyM_fFME?t=395

## Data from
JS lesson by Minin - https://jsonplaceholder.typicode.com/todos

```sh
const delay = (ms) => {
	return new Promise((r) => setTimeout(() => r(), ms));
};

const url = 'https://jsonplaceholder.typicode.com/todos';

function fetchTodos() {
	// создадим искусственную задержку
	return delay(2000)
		.then(() => fetch(url)) // САМА Ф-Я которая берет данные
		.then((response) => response.json());
}

fetchTodos()
	.then((data) => {
		console.log('Data: ', data); // выводим данные в консоль
	})
	.catch((e) => console.error(e)); // ловим ошибку
```

## FETCH + async function + await result
```sh
// Создадим вспомогательную ф-ю - которая добавит задержку в выполнении запроса
const delay = (ms) => {
	return new Promise((r) => setTimeout(() => r(), ms));
};

const url = 'https://jsonplaceholder.typicode.com/todos';

async function fetchAsyncTodos() {
	// если внутри ф-и мы используем await, то сама ф-я должна быть ассинхронной - async
	try {
		// ЕСЛИ ВСЕ ХОРОШО, то срабатывает TRY
		await delay(2000); // ждем 2s
		const response = await fetch(url); // ждем запрос
		const data = await response.json(); // ждем ответ
		console.log('Data: ', data); // выводим ответ в консольь
	} catch (e) {
		// ЕСЛИ ЧТО-ТО пошло не так, то выводим ошибку в консоль
		console.log(e);
	} finally {
		// ЭТОТ КОД ВЫПОЛНЯЕТСЯ ВНЕ ЗАВИМОСТИ ОТ ОШИБОК ВСЕГДА ВКОНЦЕ
		console.log('finally');
	}
}

fetchAsyncTodos(); // запускаем ф-ю
```

### Результат в консоле
```sh
0: {userId: 1, id: 1, title: "delectus aut autem", completed: false}
1: {userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false}
2: {userId: 1, id: 3, title: "fugiat veniam minus", completed: false}
```
