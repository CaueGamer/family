var images =["download (1).jpeg","download.jpeg","download (2).jpeg","images.png","images.jpeg","pai-desenho-vetor-clip-arte_csp22526468.webp"];
var names =["familia","filho mais novo","filho","filho mais velho","mãe","pai"];
var number = 0;
function update(){
    number++;
    var reset = 5
    if(number > reset){
        number = 0;
    }
    var image = images[number];
    var name = names[number];
    document.getElementById("image").src = image;
    document.getElementById("name").innerHTML = name;
}