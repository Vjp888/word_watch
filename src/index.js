import $ from 'jquery'

$(document).ready(() => {
  $('#make-call').click(function() {
    let url = 'https://wordwatch-api.herokuapp.com/api/v1/words';
    let words = $.trim($('text-zone').val());
    let array = words.split(" ");
    $.map( array, function(word) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({word: {value: word}})
      })
    }).then(
      fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
      .then(response => response.json())
      .then(wordData => {
        let word = JSON.parse(wordData)
        document.getElementById("test").innerHTML = word;
      })
    )
  })
})
