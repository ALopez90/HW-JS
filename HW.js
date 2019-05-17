function showHide(){
    var button = document.getElementById('button');
    var clickme = document.getElementById('clickme');
    if(clickme.style.display === 'none'){
        clickme.style.color = 'blue';
        clickme.style.padding = '2.5rem';
        clickme.style.boxShadow = '0px 5px 3px 0px black';
        clickme.style.alignItems = 'center';
        clickme.style.transition = '0.5s ease-in-out';
        clickme.style.display = 'block';
        button.style.display = 'none';
    } else if(clickme.style.display === 'block'){
        clickme.style.display = 'none';
    }
}