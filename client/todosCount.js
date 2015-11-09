Template.todosCount.helpers({

  completedTodos: function () {
    return Todos.find({completed: true}).count();
  },
  totalTodos: function () {
    return Todos.find().count();
  }
});