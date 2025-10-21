const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".key");
const themeRange = document.getElementById("themeRange");

let expression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "RESET") {
      expression = "";
      screen.textContent = "0";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      screen.textContent = expression || "0";
    } else if (value === "=") {
      try {
        expression = expression.replace(/x/g, "*");
        const result = eval(expression);
        screen.textContent = result.toLocaleString();
        expression = result.toString();
      } catch {
        screen.textContent = "Error";
        expression = "";
      }
    } else {
      expression += value;
      screen.textContent = expression;
    }
  });
});

// Theme switch
themeRange.addEventListener("input", () => {
  const value = themeRange.value;

  document.body.className = ""; // clear existing

  if (value === "2") document.body.classList.add("theme-2");
  if (value === "3") document.body.classList.add("theme-3");
});
