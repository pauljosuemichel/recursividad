// Buscador de salidas de laberintos

function wayFinder(x,y,maze){
    if(maze[y] < 0 || maze[x] < 0 || maze[y] > maze.length || maze[x] > maze.length) return false;
    if(maze[y][x] == "G") return true;
    if(maze[y][x] == "#") return false;
    if(maze[y][x] == "+") return false;
    maze[y][x] = "+";

    if(wayFinder(x,y-1,maze) == true) return true;
    if(wayFinder(x+1,y,maze) == true) return true;
    if(wayFinder(x,y+1,maze) == true) return true;
    if(wayFinder(x-1,y,maze) == true) return true;
    maze[y][x] = ".";
    return false;
}

console.log(wayFinder(0,0,[["S","#","#"],
                            [".",".","."],
                            [".","#","G"]]));