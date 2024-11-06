console.log("Email List");
// mailList = []; NON SERVE FARE ARRAY E RIEMPIRLO PERCHE A CAUSA DELLA ASINCRONICITA NON SO QUANDO SI RIEMPIE

const emailList = document.querySelector('.emails')


for (let i = 0; i < 10; i++) {
    axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((res) => {
      const randomMail = res.data.response;
      // mailList.push(randomMail);

      emailList.innerHTML += `<li>${randomMail}</li>`
    })
    .catch((err) => {
      console.log("Abbiamo un errore:", err);
    }); 
}

// console.log(mailList); NON SERVE FARE ARRAY E RIEMPIRLO PERCHE A CAUSA DELLA ASINCRONICITA NON SO QUANDO SI RIEMPIE
function fetchmails (root, n = 10) {
  for (let i = 0; i < 10; i++) {
    axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((res) => {
      const randomMail = res.data.response;
      // mailList.push(randomMail);

      root.innerHTML += `<li>${randomMail}</li>` // gli diamo dove inserire l'html senza usare parametri globali
    })
    .catch((err) => {
      console.error(err)
      alert('Qualcosa è andato storto')
    }); 
}
}


fetchmails(emailList)
loadMoreBtn.addEventListener('click', () => {
  emailList.innerHTML = ''
  fetchmails(emailList)
})