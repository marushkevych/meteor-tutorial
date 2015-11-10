Template.todosCount.helpers({

  completedTodos: function () {
    return Todos.find({listId: this._id, completed: true}).count();
  },
  totalTodos: function () {
    return Todos.find({listId: this._id}).count();
  }
});