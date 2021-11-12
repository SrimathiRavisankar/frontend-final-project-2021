function enablePost() {
    document.getElementById("postButton").disabled = false;
}
function post() {
    const name = document.getElementById("name");
    const message = document.getElementById("message")
    document.getElementById("form").innerHTML =
        "<div id='contactImage'><article class='card'><img src='../img/tick.jpg' width='80%' height='70px'/></article> </div> <p id='message' style='padding: 0.25em;'>Thank you  " + name.value + "!! </p> <p id='message' style='padding: 1px;'> Your message: " + message.value + ".</p> <p id='message' style='padding: 1px;'> We will contact you soon!!</p> <p id='remaining'></p>";
}