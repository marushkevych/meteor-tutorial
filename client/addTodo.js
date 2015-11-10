Template.addTodo.events({
  'submit form': function(event){
    event.preventDefault();
    var todoNameInput = event.target.todoName;
    Todos.insert({
      name: todoNameInput.value,
      completed: false,
      createdAt: new Date(),
      listId: this._id
    });

    todoNameInput.value = '';
  }
});