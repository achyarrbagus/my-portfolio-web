// validation function
function formValidation(nama, email, numberPhone, subject, textArea) {
  if (nama == "") {
    alert("harap masukan nama");
  } else if (email == "") {
    alert("harap masukan email");
  } else if (numberPhone == "") {
    alert("harap masukan nomor");
  } else if (subject == "") {
    alert("harap masukan subject anda");
  } else if (textArea == "") {
    alert("harap masukan pesan anda");
  } else {
    let emailDefault = "uzumaki-akbar@gmail.com";
    let sendEmail = document.createElement("a");
    sendEmail.href = `mailto:${emailDefault}? subject = ${subject} &body=hallo nama saya ${nama} dan ${textArea}`;
    sendEmail.click();
  }

  //type 2

  // if (nama !== "" && email !== "" && numberPhone !== "" && subject !== "" && textArea !== "") {
  //   let emailDefault = "akbarriyanto@gmail.com";
  //   let sendEmail = document.createElement("a");
  //   sendEmail.href = `mailto:${emailDefault}? subject = ${subject} &body=hallo nama saya ${nama}`;
  //   sendEmail.click();
  // } else {
  //   alert("harap masukan nilai");
  // }
}

function submit() {
  console.log("hello world");
  // event.preventDefault();
  // //
  // let nama = document.getElementById("nama").value;
  // let email = document.getElementById("email").value;
  // let numberPhone = document.getElementById("phone").value;
  // let subject = document.getElementById("subject").value;
  // let textArea = document.getElementById("message").value;

  // formValidation(nama, email, numberPhone, subject, textArea);
  //
}
