let sideBar = [["Home","Profile"],["Settings","Logout"]];
    for(let i = 0 ; i < sideBar.length ; i++){
        for(let j = 0 ; j < sideBar[i].length; j++){
            document.write('<a href="#" class="sidenav">' + sideBar[i][j] + '</a>')
        }
    }