document.querySelector("form").addEventListener('submit', (e)=> {
    e.preventDefault();
    let from = document.querySelector(".from input").value;
    let body = document.querySelector(".email-body textarea").value;
    let username="rifattasnimanonnya@gmail.com";
    let password = "F9EB687E1C394A88E5EDF1FD633B364BFF66";
    let securityToken = "9f76eac1-914a-4049-aee1-c25a61b1c585";
    let server = 'smtp.elasticemail.com'
    let api = "7B5F4C4BF949CAA457E39D99A587530CBBCDF6E0B71E31F603E6BEF02AA4A12B9A8E5A76C5DDDFDF1AF8737F87D1E0D5";
    Email.send({
        SecureToken : securityToken,
        To : 'samahirtajwar@gmail.com',
        From : from,
        Subject : "Abtahi Tajwar | Hire Me",
        Body : body
    }).then(
      console.log("sent")
    );
})