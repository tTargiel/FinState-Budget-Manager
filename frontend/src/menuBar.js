function menuBar() {
  var menu = new nw.Menu({ type: "menubar" });

  menu.createMacBuiltin("FinState");

  var rootMenu = menu.items[0].submenu;
  rootMenu.append(
    new nw.MenuItem({
      label: "Item X",
      click : function () {
        alert("Clicked on Item X!");
      }
    })
  );
    
  var menu1 = new nw.Menu();
  menu1.append(new nw.MenuItem({
    label: "Item A",
    click : function () {
      alert("Clicked on Item A!");
    }
  }));
  menu1.append(new nw.MenuItem({
    label: "Item B",
    click : function () {
      alert("Clicked on Item B!");
    }
  }));
  menu.append(new nw.MenuItem({ label: "Menu 1", submenu: menu1 }));

  var menu2 = new nw.Menu();
  menu.append(new nw.MenuItem({
    label: "Menu 2",
    submenu: menu2
  }));

  nw.Window.get().menu = menu;
}

export default menuBar;
