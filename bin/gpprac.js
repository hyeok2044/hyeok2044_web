fetch('https://jsonplaceholder.typicode.com/posets/1/comments')
  .then(response => response.json())
  .then(json => console.log(json));

