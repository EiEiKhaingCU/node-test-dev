document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const contentList = document.getElementById("contentList");
  const items = contentList.getElementsByTagName("summary");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
      const content = items[i].innerText.toLowerCase();

      if (content.includes(searchTerm)) {
        items[i].parentElement.style.display = "block";
      } else {
        items[i].parentElement.style.display = "none";
      }
    }
  });
});
