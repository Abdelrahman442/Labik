$(document).ready(function () {
  // Load suras data from JSON file
  $.getJSON("../../data/quran.json", function (data) {
    var surasList = $("#suras-list");
    // Loop through each sura in the JSON data
    data.forEach(function (sura, index) {
      // Create a list item for each sura and append it to the surasList
      var activeClass = index === 0 ? "active" : "";
      surasList.append(
        `<li class="sura-item ${activeClass}" data-sura-id="${sura.id}">${sura.name}</li>`
      );
    });
    var defaultSuraId = 1;
    // إيجاد العنصر li الخاص بالسورة الافتراضية
    var defaultSuraItem = $(`.sura-item[data-sura-id="${defaultSuraId}"]`);
    // إضافة الكلاس active إلى السورة الافتراضية
    defaultSuraItem.addClass("active");

    // الآن يمكنك عرض محتوى السورة الافتراضية في الصفحة عند تحميلها
    var defaultSura = data.find(function (item) {
      return item.id == defaultSuraId;
    });
    if (defaultSura) {
      var suraContent = $("#sura-content");
      suraContent.append(`<h2>${defaultSura.name}</h2>`);
      suraContent.append(
        `<h2 class="py-4">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h2>`
      );
      suraContent.append(`<p>${defaultSura.ar}</p>`);
    }

    // Add click event listener to sura items
    $(".sura-item").click(function () {
      // إزالة الكلاس النشط من جميع عناصر السور
      $(".sura-item").removeClass("active");
      // إضافة الكلاس النشط إلى السورة المنقرة
      $(this).addClass("active");
      // استخراج معرف السورة
      var suraId = $(this).data("sura-id");
      // العثور على السورة المحددة في البيانات المسترجعة
      var sura = data.find(function (item) {
        return item.id == suraId;
      });
      // إذا تم العثور على السورة
      if (sura) {
        var suraContent = $("#sura-content");
        suraContent.empty(); // حذف أي محتوى سابق
        suraContent.append(`<h2>${sura.name}</h2>`); // إضافة عنوان السورة
        suraContent.append(
          `<h2 class="py-4">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h2>`
        );
        suraContent.append(`<p>${sura.ar}</p>`); // إضافة نص السورة
      }
    });
  });
});
