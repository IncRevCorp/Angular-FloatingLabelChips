(function () {
    'use strict';
    angular
        .module('MyApp', ['ngMaterial'])
        .controller('CustomInputDemoCtrl', DemoCtrl);

    function DemoCtrl($timeout, $q) {
        var self = this;

        self.readonly = false;
        self.selectedItem = null;
        self.searchText = null;
        self.querySearch = querySearch;
        self.cities = loadCities();
        self.selectedCities = [];
        self.numberChips = [];
        self.numberChips2 = [];
        self.numberBuffer = '';

        /**
         * Search for vegetables.
         */
        function querySearch(query) {
            var results = query ? self.cities.filter(createFilterFor(query)) : [];
            return results;
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(city) {
                return (city._lowername.indexOf(lowercaseQuery) === 0) ||
                    (city._lowertype.indexOf(lowercaseQuery) === 0);
            };

        }

        function loadCities() {
            var cities = [
              {
                  'name': 'London',
                  'country': 'United Kingdom'
              },
              {
                  'name': 'California',
                  'country': 'United States of America'
              },
              {
                  'name': 'New Delhi',
                  'country': 'India'
              },
              {
                  'name': 'Mumbai',
                  'country': 'India'
              },
              {
                  'name': 'Chennai',
                  'country': 'India'
              },
              {
                  'name': 'New york',
                  'country': 'United States of America'
              },
              {
                  'name': 'Melbourne',
                  'country': 'Australia'
              },
              {
                  'name': 'Bangalore',
                  'country': 'India'
              },
              {
                  'name': 'Bay Area',
                  'country': 'United States of America'
              },
              {
                  'name': 'Lucknow',
                  'country': 'India'
              }
            ];

            return cities.map(function (city) {
                city._lowername = city.name.toLowerCase();
                city._lowertype = city.country.toLowerCase();
                return city;
            });
        }
    }
})();
