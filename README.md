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
