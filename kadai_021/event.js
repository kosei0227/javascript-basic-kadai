const eventBtn = document.getElementById('btn');

eventBtn.addEventListener('click',()=> {
    setTimeout(()=> {
        eventText = document.getElementById('text');
        eventText.textContent='ボタンがクリックされました';
    },2000);
});