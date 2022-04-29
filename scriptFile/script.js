let list = document.querySelectorAll('ol');
console.log(list[0]);

// list[0].style.display = 'none';

let buttons = document.getElementsByClassName('redMoreButton');
console.log(buttons[0]);

function showMoreLess(Number) {
  if (list[Number].style.display === 'none') {
    list[Number].style.display = 'block';
    buttons[Number].innerText = ' Read less';
  } else {
    list[Number].style.display = 'none';
    buttons[Number].innerText = ' Read more';
  }
}