Template.addList.events({
  'submit form': function (event) {
    event.preventDefault();
    var input = event.target.listName;
    Lists.insert({name: input.value});
    input.value = '';
  }
});