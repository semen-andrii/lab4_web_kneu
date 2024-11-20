// початкова хеш-таблиця
const dictionary = {
  dictionary: "словник",
  text: "текст",
  day: "день",
  city: "місто"
}
const input = document.getElementById("input");
const out = document.getElementById("out");

document.getElementById("search").addEventListener("click", function search(){
  var key = input.value;

  if(key == ""){
    out.textContent = "Введіть слово";
  } else {
    if(key in dictionary){
      out.textContent = dictionary[key];
    } else {
      out.textContent = "Не знайдено!";
    }
  }
});
