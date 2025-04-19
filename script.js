document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get or set count
  let count = getCookie('count');
  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  setCookie('count', count, 7); // Set cookie to last 7 days

  // Show it on the page
  document.getElementById('countDisplay').innerText = count;
});
