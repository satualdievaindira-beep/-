const WHATSAPP = "996000000000"; // номер для заявок, без плюса

const days = {
  "Пн": [["07:30","Функциональный тренинг","Алина"],["19:00","Кроссфит","Тимур"],["20:30","Йога","Мээрим"]],
  "Вт": [["08:00","Пилатес","Мээрим"],["18:30","Силовой круг","Тимур"],["20:00","Растяжка","Алина"]],
  "Ср": [["07:30","Кроссфит","Тимур"],["19:00","Функциональный тренинг","Алина"],["20:30","Йога","Мээрим"]],
  "Чт": [["08:00","Силовой круг","Тимур"],["18:30","Пилатес","Мээрим"],["20:00","Кардио-микс","Алина"]],
  "Пт": [["07:30","Функциональный тренинг","Алина"],["19:00","Кроссфит","Тимур"]],
  "Сб": [["10:00","Йога","Мээрим"],["11:30","Кроссфит","Тимур"],["13:00","Растяжка","Алина"]],
  "Вс": [["11:00","Лёгкая йога","Мээрим"],["12:30","Кардио-микс","Алина"]]
};

const tabs = document.getElementById("tabs");
const slots = document.getElementById("slots");

function show(day){
  [...tabs.children].forEach(b => b.setAttribute("aria-selected", b.textContent === day));
  slots.innerHTML = days[day].map(([t,n,c]) =>
    `<li><time>${t}</time><span>${n}</span><em>${c}</em></li>`).join("");
}

Object.keys(days).forEach(d => {
  const b = document.createElement("button");
  b.textContent = d; b.setAttribute("role","tab");
  b.onclick = () => show(d);
  tabs.appendChild(b);
});
const today = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"][new Date().getDay()];
show(today);

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const text = `Здравствуйте! Хочу записаться на пробное занятие. Меня зовут ${f.get("name")}, телефон ${f.get("phone")}.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
});
document.getElementById("y").textContent = new Date().getFullYear();
