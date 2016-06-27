import $ from 'jquery';
import {items} from './items.js';



function searchResultTemplate (obj) {
  var result = obj['results']
  var image = result.Images
  return `<div class="search-results">
   <h3 class="title">${result[1]}</h3>
    <p>Price: ${result[5]}</p>
  </div>`;
}

items.forEach(function (x) {
  var node = $(".search-content");
  var searchHTML = searchResultTemplate(x);
  node.append(searchHTML);
});

// var resultsArray = []
//
// itemArray.forEach(function (x) {
// resultsArray.push(itemArray.results)
//
// });
