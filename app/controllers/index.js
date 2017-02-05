

$.index.open();

 var url = 'https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=f2df1e4df503497ca75f7c5acf1a7b25';
 var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         //Ti.API.info("Received text: " + this.responseText);
         var obj = JSON.parse(this.responseText);
         alert(obj.author);
         Ti.API.info(obj.articles[0].author);
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send();
 
Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow();


var sectionFruit = Ti.UI.createTableViewSection({ headerTitle: 'Fruit' });
sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Apples' }));
sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Bananas' }));

var sectionVeg = Ti.UI.createTableViewSection({ headerTitle: 'Vegetables' });
sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Carrots' }));
sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Potatoes' }));

var searchBar = Titanium.UI.createSearchBar({
	showCancel:true,
	hintText:"Search for the caption text"
});

var tableView = Ti.UI.createTableView({
  data: [sectionFruit, sectionVeg],
  top:15,
  search:searchBar,//Set the search bar object here
  filterAttribute:"searchFilter"//What attribute to search for data in
});


tableView.addEventListener("click", function(e){
	
	//Create and open a new window
	var w = Titanium.UI.createWindow({
		title:e.rowData.title,
		backgroundColor:"#FFFFFF"
	});
	
	var label = Titanium.UI.createLabel({
		text:"This is a new window",
		height:"auto",
		width:"auto"
	});
	
	w.add(label);
	
	//Slide-open the window
	w.open({animated:true});
	//If in an external file, you'd use Titanium.UI.currentTab to reference
	//the current tab
	//Titanium.UI.currentTab.open(w,{animated:true});
	
});
win.add(tableView);
win.open();