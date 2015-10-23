# elzar
Weekly menu planner

## Why???
To save time on Sundays, i built this Angular Single-Page App to help build the weekly menu.
It includes the dates and days of the week next to each randomly selected menu item.

Of course, i didn't build this myself.  i used the Angular-Generator plugin for Yeoman.  As a result, a lot of files in here are not mine, have not been adopted to the project functionality by me, and may contain code i am not familiar with.  The main page of the project though does contain only those elements and scripts i wrote, and my recipe controller, and my modified stylesheet.

Each menu item also has a Prep Difficulty rating next to it.  That way they can be sorted so
the easier stuff is at the beginning of the week, when we are busy with other activities 
in the evening.  

The resulting menu looks like:

![Sample Menu](https://raw.githubusercontent.com/tuhsteh/elzar/master/sample_menu.png  "Sample Menu")


## To try it for yourself:
Clone the repo somewhere, and then run
```|bash
$ grunt serve
```
You will need to have Node, npm,  Grunt, and Bower setup first.  


## TODO:
 - Move the recipes from a JS file into a database (Mongo makes an obvious choice).
 - Add the ability to reorder selected menu items in the UI, or make another selection (currently, if you don't like something, you refresh to get a whole new weeks' menu).
 - In that database, also store data about when a menu item was chosen last, so it won't be chosen again soon.
 - And still more database stuff, if each menu item had an associated recipe, then all the ingredients could be combined into a set and made into a grocery list.



 
