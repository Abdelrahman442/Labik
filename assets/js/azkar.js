$.getJSON("../../data/adkar.json", function (data) {
  var azkarContainer = $("#azkar-container");
  var selectCategories = $("#categories");

  // Loop through each category
  Object.keys(data).forEach(function (category) {
    // Fill the select element with categories
    selectCategories.append(`<option value="${category}">${category}</option>`);

    // Create a card for each zekr in the category
    data[category].forEach(function (zekr) {
      var card = `
              <div class="card ${
                category === Object.keys(data)[0] ? "d-block" : "d-none"
              }" data-category="${category}">
                  <div class="card-header">${zekr.category}</div>
                  <div class="card-body">
                      <p class="card-text">${zekr.content}</p>
                      ${
                        zekr.description
                          ? `<p class="card-text text-muted"><small>${zekr.description}</small></p>`
                          : ""
                      }
                  </div>
              </div>
          `;
      azkarContainer.append(card);
    });
  });

  // Handle category change event
  selectCategories.on("change", function () {
    var selectedCategory = $(this).val();
    $(".card")
      .addClass("d-none")
      .filter(`[data-category="${selectedCategory}"]`)
      .removeClass("d-none");
  });
});
