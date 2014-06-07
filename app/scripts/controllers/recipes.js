'use strict';

var _dayOfWeekInitial = function _dayOfWeekInitial(dayOfWeekInteger) {
        return ['Sun', 'M', 'T', 'W', 'R', 'F', 'Sat'][dayOfWeekInteger];
    },
    _pick7 = function _pick7() {
        var retVal = [],
            recipesCopy = recipeEntries.slice(), // make a separate copy of the recipe list, because we're going to destroy it.
            i;
        for (i = 0; i < 7; i++) {
            var pick = Math.floor(Math.random() * recipesCopy.length);
            retVal.push(recipesCopy[pick]);
            recipesCopy.splice(pick, 1);     //sort of [].delete.  The array delete method leaves a hole.  This removes and shrinks.
        }
        return retVal;
    },
    _getDates = function _getDates() {
        var dates = [],
            now = new Date(),
            weekDay = now.getDay(),
            startDate = now.getDate();  //assume we'll start with the current date.
        if (weekDay !== 1) {
            //advance the date to the next monday if today is not a monday.
            startDate += (7 - weekDay) % 7 + 1;
            now.setDate(startDate);
        }
        for (var i = 0; i < 7; i++) {
            dates[i] = new Date(now);
            var nextDate = now.getDate() + 1;
            now.setDate(nextDate);
        }
        return dates;
    },
    _buildMenu = function _buildMenu(d, r) {
        var menu = [];
        for (var i = 0; i < d.length; i++) {
            var menuItem = {
                dayOfWeek: _dayOfWeekInitial(d[i].getDay()),
                date: d[i].getDate(),
                recipe: r[i]
            };
            menu[i] = menuItem;
        }
        return menu;
    };

angular.module('elzarApp')
    .controller('RecipeCtrl', function ($scope) {
        $scope.dates = _getDates();
        $scope.recipes = _pick7();
        $scope.menu = _buildMenu($scope.dates,
            $scope.recipes.sort(
                function compare(a, b) {
                    if (a.prepRating < b.prepRating) {return -1;}
                    if (a.prepRating === b.prepRating) {return 0;}
                    if (a.prepRating > b.prepRating) {return 1;}
                }
            )
        );
    });


