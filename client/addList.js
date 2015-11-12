Template.addList.events({
  'submit form': function (event) {
    event.preventDefault();
    var input = event.target.listName;
    Lists.insert({name: input.value}, function (err, result) {
      Router.go('listPage', {_id: result});
    });
    input.value = '';
  }
});