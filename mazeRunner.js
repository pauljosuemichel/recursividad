// Buscador de salidas de laberintos

function wayFinder(x,y,maze){
    if(maze[x][y] < 0 || maze[x][y] > maze.length){ return false; }
    if(maze[x][y] == "G"){ return true; }
    if(maze[x][y] == "#"){ return false; }
    if(maze[x][y] == "x"){ return false; }
    maze[x][y] = "+";

    if(wayFinder(x,y-1,maze) == true){ return true; }
    if(wayFinder(x+1,y,maze) == true){ return true; }
    if(wayFinder(x,y+1,maze) == true){ return true; }
    if(wayFinder(x-1,y,maze) == true){ return true; }
    maze[x][y] = "x";
    return false;
}

console.log(wayFinder(0,0,[["S","#","#"],
                            [".",".","."],
                            [".","#","G"]]));