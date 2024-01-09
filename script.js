// your code here
function updateURL() {
            var nameValue = document.getElementById("name").value;
            var yearValue = document.getElementById("year").value;
            var updatedURL = "https://localhost:8080/?name=" + encodeURIComponent(nameValue) + "&year=" + encodeURIComponent(yearValue);

            document.getElementById("url").textContent = updatedURL;
        }