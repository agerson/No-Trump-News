

$.index.open();

Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow();

var sectionFruit = Ti.UI.createTableViewSection({ headerTitle: 'Fruit' });
sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Apples' }));
sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Bananas' }));

var sectionVeg = Ti.UI.createTableViewSection({ headerTitle: 'Vegetables' });
sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Carrots' }));
sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Potatoes' }));

var table = Ti.UI.createTableView({
  data: [sectionFruit, sectionVeg],
  top:15
});

table.addEventListener('click', function(e) {
    alert(e.rowData.id+":"+e.rowData.title);
});

win.add(table);
win.open();