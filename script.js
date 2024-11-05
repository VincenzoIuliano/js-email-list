console.log("Email List");
mailList = [];

for (let i = 0; i < 11; i++) {
    axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((res) => {
      let randomMail = res.data.response;
      mailList.push(randomMail);
    })
    .catch((err) => {
      console.log("Abbiamo un errore", err);
    });
  
}

console.log(mailList);
