function addProduct() {
  const taskText = document.querySelector('input').value;

  if (taskText.trim() !== '') {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskContent = document.createTextNode(taskText);

    listItem.appendChild(checkbox);
    listItem.appendChild(taskContent);

    document.querySelector('ul').appendChild(listItem);

    document.querySelector('input').value = '';
  }
}

document.querySelector('button').addEventListener('click', addTask);
