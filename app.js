document.addEventListener('DOMContentLoaded', () => {

    const dino = document.querySelector('.dino')
    let isJumping = false;
    let gravity = 0.9;
    function control(e){
        if(e.keyCode === 32 ) {
            if (!isJumping) {
                isJumping = true;
                jump()
            }
        }
    }
    document.addEventListener('keydown', control)

    let position = 0;
    function jump() {
    let count = 0;
       let timerId = setInterval(function() {

        // move down
        if (count == 15) {
            clearInterval(timerId);

            console.log('down');
            let downTimerId = setInterval(function() {
                if (count == 0) {
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                position -= 13;
                count--;
                position *= (gravity + 0.1);
                dino.style.bottom = position + 'px';
            }, 20);
        }

        // move up
        console.log('up');
        count++
        position += 30;
        position *= gravity;
        dino.style.bottom = position + 'px';
        console.log(dino.style.bottom);
       }, 20)
    };

    

 
})