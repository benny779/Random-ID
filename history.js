console.log('history start');
// alert()


let history=[{}]


// save the history in Storage
const localStorage = window.localStorage;
// localStorage.setItem('RandomID-3', { id: 123456, date: getDateTime() });
let res = localStorage.getItem('RandomID-3');
// console.log(res.id);

// let list = {
//   123456: getDateTime(),
//   987654: getDateTime(),
// };

// console.log(list);

// chrome.storage.sync.set({ 'Random-ID': { 123456: getDateTime() } }, (res) => {
//   console.log(res.key);
// });

// let res = localStorage.getItem('Random-ID');
// console.log(res);

// localStorage.setItem(123456, getDateTime());
// res = localStorage.getItem('Random-ID');
// console.log(res);

// list['1w'].forEach((val) => {
//   console.log(val.randomID);
// });

// let rnd=1234
// getTabDomain((domain) => {
//     // chrome.storage.sync.set(domain)
//   })

// chrome.storage.sync.get('google.com', (res) => {
//   let randomID = res.key;
//   if (!randomID === undefined) {
//     updateStatusTemp(randomID);
//   } else {
//     chrome.storage.sync.set({ 'google.com': 1111 }, () => {
//       updateStatusTemp(1111);
//     });
//   }
// });

// let list = ['1', '2'];
// list['1'].randomID = 123456;
// list['2'].randomID = 9876;

// let doamin = '1'
// console.log(list[domain].randomID);

// getTabDomain((domain) => {
//   updateStatusTemp(domain);
// });

function getTabDomain(cb) {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tabUrl = tabs[0].url;
    const domain = new URL(tabUrl).host;
    cb(domain);
  });
}

function getDateTime() {
  const date = new Date();
  let d = date.getDate();
  let mo = date.getMonth() + 1;
  let y = date.getFullYear();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  //   let ms = date.getMilliseconds();

  d = d < 10 ? '0' + d : d;
  mo = mo < 10 ? '0' + mo : mo;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  const shortDate = d + '/' + mo + '/' + y;
  const time = h + ':' + m + ':' + s; //+ ':' + ms;
  return shortDate + ' ' + time;
}

/*test*/
// const url = 'https://www.example.com/blog?search=hello&world';
// let domain = (new URL(url)).hostname;
// console.log(domain);

function updateStatusTemp(text) {
  let status = document.getElementById('status');
  status.innerText = text;
  status.classList = 'success';
  status.style.display = 'flex';
}
