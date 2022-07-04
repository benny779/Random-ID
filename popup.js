let randomID = 0;

const myID = document.getElementById('myID');
const reloadBtn = document.getElementById('reloadBtn');
const copyBtn = document.getElementById('copyBtn');
updateRandomID();

reloadBtn.addEventListener('click', () => {
  updateRandomID();
});

myID.addEventListener('click', () => {
  let copyStatus = copyTextToClipboard(randomID);
  updateStatus(copyStatus);
});

function updateRandomID() {
  randomID = getRandomID();
  myID.innerText = randomID;
}

function getRandomID() {
  const min = 11111111;
  const max = 99999999;
  let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
  //   rnd = String(rnd).padStart(8, '0');
  rnd = rnd + '0';

  for (let i = 1; i < 10; i++) {
    let res = Array.from(rnd, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    });
    if (res % 10 === 0) {
      break;
    }
    rnd = parseInt(rnd) + 1;
    rnd = rnd.toString();
  }
  return rnd;
}

function copyTextToClipboard(text) {
  let textArea = document.createElement('textarea');

  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if the element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a
  // flash, so some of these are just precautions. However in
  // Internet Explorer the element is visible whilst the popup
  // box asking the user for permission for the web page to
  // copy to the clipboard.
  //

  // Place in the top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of the white box if rendered for any reason.
  textArea.style.background = 'transparent';

  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let successful;
  try {
    successful = document.execCommand('copy');
  } catch (err) {
    successful = false;
  }

  document.body.removeChild(textArea);
  return successful;
}

function updateStatus(bool) {
  let status = document.getElementById('status');
  status.innerText = `Copying ID was ${bool ? 'successful' : 'unsuccessful'}`;
  status.classList = bool ? 'success' : 'alert';
  status.style.display = 'flex';
  setTimeout(() => {
    status.style.display = 'none';
  }, 3000);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* table design */
// window.addEventListener('resize', () => {
let theadCells = document
  .getElementById('history')
  .getElementsByTagName('thead')[0]
  .getElementsByTagName('tr')[0]
  .getElementsByTagName('th');

const tbodyCells = document
  .getElementById('history')
  .getElementsByTagName('tbody')[0]
  .getElementsByTagName('tr')[0]
  .getElementsByTagName('td');

console.log('=========');
for (let i = 0; i < theadCells.length; i++) {
  console.log(tbodyCells[i].clientWidth + 'px b');
  console.log(theadCells[i].clientWidth + 'px h');

  let w = tbodyCells[i].clientWidth - 16 + 'px';
  console.log(w);
  theadCells[i].style.minWidth = w;
  theadCells[i].style.maxWidth = w;
  console.log('------');

  console.log(tbodyCells[i].clientWidth + 'px b');
  console.log(theadCells[i].clientWidth + 'px h');
  console.log('********');
}
// console.log(111);
// });

// .map((v, i) => {
//   console.log(v);
// });

// var $table = $('#history');
// var $bodyCells = $table.find('tbody>tr:first').children();
// var colWidth;

// $(window)
//   .resize(() => {
//     colWidth = $bodyCells
//       .map(() => {
//         $(this).width();
//       })
//       .get();

//     $table
//       .find('thead tr')
//       .children()
//       .each((i, v) => {
//         console.log(yy);
//         $(v).width(colWidth[i]);
//       });
//   })
//   .resize();
