export const fetchTodos = (url) => {
  return fetch('http://127.0.0.1:8000/api/' + url)
    .then(data => data.json())
    .then(data => data)
}
