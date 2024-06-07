document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://api.aladhan.com/v1/timingsByCity?city=Mecca&country=Saudi%20Arabia&method=2"
  )
    .then((response) => response.json())
    .then((data) => {
      const prayerTimes = data.data.timings;
      const prayerTimesElement = document.getElementById("prayer-times");

      const prayers = [
        { name: "الفجر", time: prayerTimes.Fajr, icon: "fas fa-cloud-moon" },
        { name: "الظهر", time: prayerTimes.Dhuhr, icon: "fas fa-sun" },
        { name: "العصر", time: prayerTimes.Asr, icon: "fas fa-cloud-sun" },
        {
          name: "المغرب",
          time: prayerTimes.Maghrib,
          icon: "fas fa-cloud-sun",
        },
        { name: "العشاء", time: prayerTimes.Isha, icon: "fas fa-moon" },
      ];

      prayers.forEach((prayer) => {
        const prayerElement = document.createElement("div");
        prayerElement.className = "col prayer-time";
        prayerElement.innerHTML = `
                    <i class="${prayer.icon}"></i>
                    <span>${prayer.name}</span>
                    <span>${prayer.time}</span>
                `;
        prayerTimesElement.appendChild(prayerElement);
      });
    })
    .catch((error) => console.error("Error fetching prayer times:", error));
});
