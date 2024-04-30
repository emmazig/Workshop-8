# Workshop-8

This is the URl -- https://emmazig.github.io/Workshop-task-8/

ipify.org 

Json = java script object notation

open-meteo.com (weather forecast api)

Limitation - read in documentation

Create variables 

Ip address → let ip;
Url → let api = ‘  URL ‘ ;   —- test link in browser 

Async function getIp() {     → so it doesn't interrupt the flow of the program

Let data = await fetch (api); → holds data
Let j_data = await data.json () ;  → json format
Ip = j_data.ip 


Setup:
getIp();
draw :
Text (ip, 20,100);

I struggled to make sense of the api outputs in my browser at first but I figured out I could download a google extension to help ‘organise’ the code.

I started by practising using an api by using a joke generator api - I also played around briefly with a trivia question generator. But I decided on using the open-meteo site in the end. I have the current swell and wave height as well as the predicted swell and wave height of Hot Water Beach- (a local surf beach nearby) displayed. I also have the background changing depending on how big the wave height is, a darker blue if it's greater than a metre and a light blue if it is under a metre.
