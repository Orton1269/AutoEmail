document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var se = document.getElementById("sendor").value;
    var r= document.getElementById("re").value;
    var message = document.getElementById("message").value;
    emailjs.init('your public id');

    emailjs.send("your service id", "your template id", {
      to_email: r,
      from: se,
      message_html: message
    }).then(function(response) {
      console.log("Email sent successfully:", response);
      document.getElementById("status").innerText = "Email sent successfully!";
    }, function(error) {
      console.error("Email sending failed:", error);
      document.getElementById("status").innerText = "Email sending failed. Please try again later.";
    });
  });
  