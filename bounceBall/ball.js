const Color = [
    "red", "lightgreen", "purple", "orange", "yellow", "blue"
    ]
    
for (let i=0;i<10;i++){
    let ball = document.createElement("div");
    ball.classList.add("ball")
    
    ball.height = 50
    ball.width = 50
    
    ball.count =0
    
    ball.y = Math.random() * 300;
    ball.dy = 0;
    ball.ay = 0.3;
    
    ball.x = Math.random() * 300;
    ball.dx = Math.random() * 10;
    
    ball.style.background = Color[i % Color.length];
    
    
    
    document.body.appendChild(ball);
    
    moveBall(ball)
}

let counter=0
document.body.addEventListener('click', function() {
    let ball = document.createElement("div");
    ball.classList.add("ball")
    
    ball.height = 50
    ball.width = 50
    
    ball.count =0
    
    ball.y = Math.random() * 300;
    ball.dy = 0;
    ball.ay = 0.3;
    
    ball.x = Math.random() * 300;
    ball.dx = Math.random() * 10;
    
    ball.style.background = Color[counter % Color.length];
    counter++
    
    
    
    document.body.appendChild(ball);
    
    moveBall(ball)
})

function moveBall(ball){
    ball.y+=ball.dy
    ball.dy+=ball.ay
    
    ball.x+=ball.dx

    if(ball.x > window.innerWidth-ball.height){
        ball.x=window.innerWidth-ball.height;
        ball.dx*=-1
        ball.count++
        if (ball.count==10){
            remove(ball)
        }
    } else if (ball.x<0) {
        ball.x=0
        ball.dx*=-1
        ball.count++
        if (ball.count==10){
            remove(ball)
        }
    }
    
    if (ball.y > window.innerHeight-ball.width){
       ball.y = window.innerHeight-ball.width;
        ball.dy*=-1
        ball.count++
        if (ball.count==10){
            remove(ball)
        }
    } else if (ball.y < 0){
        ball.y=0
        ball.dy *= -1
        ball.count++
        if (ball.count==10){
            remove(ball)
        }
    }
    
    ball.style.height = ball.height+"px"
    ball.style.width = ball.width +"px"
    ball.style.left=ball.x+"px"
    ball.style.top=ball.y+"px"

    
    setTimeout (function() {moveBall(ball)},1000/60)
}

function remove(ball) {
    ball.parentElement.removeChild(ball)
}

