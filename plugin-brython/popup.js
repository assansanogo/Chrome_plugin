window.onload=function(){

function handleButtonClick(event) {
alert("blabla");
}

var stuff = {"text": "textstuff"};
document.getElementById('bt1').addEventListener("click", ()=>{ 

		alert('hi')

		chrome.runtime.sendMessage(
	    {
	        contentScriptQuery: "postData"
	        , data: stuff
	        , url: "http://127.0.0.1:8666/msg"
	    }, function (response) {
	        debugger;
	        if (response != undefined && response != "") {
	            callback(response);
	        }
	        else {
	            debugger;
	            callback(null);
	        }
	        alert(response);
	    });
	});
}


