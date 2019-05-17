function showHide() {
    var clickme = document.getElementById('clickme');
    if(clickme.style.display === 'none') {
        clickme.style.display = 'block';
    } else if(clickme.style.display === 'block') {
        clickme.style.display = 'none';
    }
    var heading1 = document.createElement('h1');
        heading1.innerHTML = 'Oh Hi!';
        clickme.appendChild(heading1);
        heading1.style.color = 'Red';
        heading1.style.fontSize = '4rem';
        heading1.style.textAlign = 'center';
    var navbar = document.createElement('nav');
        var a1 = document.createElement('a');
            a1.innerHTML = 'Dont click me';
            a1.href = '#'
            clickme.appendChild(a1);
            a1.style.paddingRight = '7px';
        var a2 = document.createElement('a');
            a2.innerHTML = 'Dont do it!';
            a2.href = '#'
            clickme.appendChild(a2);
            a2.style.paddingRight = '7px';
        var a3 = document.createElement('a');
            a3.innerHTML = 'STOP!';
            a3.href = '#'
            clickme.appendChild(a3);
        clickme.appendChild(navbar);
    var text = document.createElement('p');
        text.innerHTML = 'Welcome to my humble abode! My name is Worm, nice to meet ya!';
        clickme.appendChild(text);
        text.style.fontSize = '2.5rem';
        text.style.color = 'blue';
        text.style.textAlign = 'center';
    var image = document.createElement('img');
        image.src = 'wave.gif';
        clickme.appendChild(image);
        image.style.display = 'block';
        image.style.marginLeft = 'auto';
        image.style.marginRight = 'auto';
    var button1 = document.createElement('button');
        button1.innerHTML = 'Click for more!';
        clickme.appendChild(button1);
        button1.addEventListener("click", function(){
            var heading2 = document.createElement('h2');
                heading2.innerHTML = 'Wait... how did you find me?';
                clickme.appendChild(heading2);
                heading2.style.color = 'purple';
                heading2.style.fontSize = '3rem';
            var button2 = document.createElement('button');
                button2.innerHTML = 'Stop clicking me!';
                clickme.appendChild(button2);
                button2.addEventListener("click", function(){
                    var heading3 = document.createElement('h4');
                    heading3.innerHTML = 'Get away from me!!';
                    clickme.appendChild(heading3);
                    heading3.style.color = 'red';
                });
        });

    document.getElementById('button').style.visibility = 'hidden';
}
