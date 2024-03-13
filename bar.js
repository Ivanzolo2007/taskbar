document.addEventListener("DOMContentLoaded", function () {
  const titleInput = document.getElementById("title");
  const createButton = document.getElementById("create");
  const list = document.getElementById("list");

  createButton.addEventListener("click", function () {
    const title = titleInput.value.trim();
    if (title !== "") {
      // Create list item
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span>${title}</span>
        <span>
          <span class="btn btn-small btn-success">✓</span>
          <span class="btn btn-small btn-danger">×</span>
        </span>
      `;

      // Append list item to the list
      list.appendChild(li);

      // Clear input
      titleInput.value = "";
    } else {
      alert("Please enter a title.");
    }
  });

  // Event delegation for dynamically created buttons
  list.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-success")) {
      // Handle success button click
      alert("Success button clicked.");
    } else if (event.target.classList.contains("btn-danger")) {
      // Handle delete button click
      event.target.closest("li").remove();
    }
  });
});
