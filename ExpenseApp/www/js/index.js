document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize an object to store daily expenses and income
  const weeklyData = {
    sun: { expenses: 0, income: 0 },
    mon: { expenses: 0, income: 0 },
    tue: { expenses: 0, income: 0 },
    wed: { expenses: 0, income: 0 },
    thu: { expenses: 0, income: 0 },
    fri: { expenses: 0, income: 0 },
    sat: { expenses: 0, income: 0 },
  };
  const categoryData = { food: 0, hou: 0, extra: 0 };

  // Add a submit event listener to the form
  const form = document.expense_form;

  form.addEventListener("submit", function (event) {
    // Get selected day, expense, income, and category
    const selectedDay = form.days.value;
    const expense = parseFloat(form.expense.value) || 0;
    const income = parseFloat(form.income.value) || 0;
    const category = form.cat.value;

    // Update daily and weekly data
    weeklyData[selectedDay].expenses += expense;
    weeklyData[selectedDay].income += income;

    // Update category-wise expenses for the week
    categoryData[category] += expense;

    // Reset form fields
    form.reset();

    // Update the UI
    updateWeeklySummary();
  });

  // Function to update the weekly summary in the UI
  function updateWeeklySummary() {
    const weeklySummary = document.getElementById("weekly-summary");
    weeklySummary.innerHTML = "";

    for (const day in weeklyData) {
      const dayData = weeklyData[day];
      const daySummary = document.createElement("div");
      daySummary.innerHTML = `<b>${day}:</b> Expenses: $${dayData.expenses.toFixed(
        2
      )} - Income: $${dayData.income.toFixed(2)}`;
      weeklySummary.appendChild(daySummary);
    }

    // Add category-wise expenses for the whole week
    const categorySummary = document.createElement("div");
    categorySummary.innerHTML = "<h3>Category-wise Expenses for the Week</h3>";
    for (const category in categoryData) {
      categorySummary.innerHTML += `${category}: $${categoryData[
        category
      ].toFixed(2)}<br>`;
    }
    weeklySummary.appendChild(categorySummary);
  }
});
