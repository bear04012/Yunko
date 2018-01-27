
class Brick {
    constructor (x,y,width,height) {
        this.x = x;
        this.y = y;
        
        this.width = width;
        this.height = height;
        
        this.color = "lightgray";
        
        this.tag = this.createTag();
    }
    
    createTag(){
        let tag = document.createElement("div");
        tag.classList.add("brick")
        tag.style.position = "absolute";
        tag.style.width = this.width + "px";
        tag.style.height = this.height +"px";
        tag.style.background = this.color;
        tag.style.left = this.x + "px"
        tag.style.top = this.y + "px"
        tag.style.border = "2px solid #323636";
        document.body.appendChild(tag);
        
        return tag;
        
    }
}

class Stick {
    constructor (x,y,width,height) {
        this.x = x;
        this.y = y;
        
        this.width = width;
        this.height = height;
        
        this.color = "skyblue";
        
        this.tag = this.createTag();
    }
    
    createTag(){
        let tag = document.createElement("div");
        tag.classList.add("stick")
        tag.style.position = "absolute";
        tag.style.width = this.width + "px";
        tag.style.height = this.height +"px";
        tag.style.background = this.color;
        tag.style.left = this.x + "px";
        tag.style.top = this.y +"px";
        document.body.appendChild(tag);
        
        return tag;
    }
    
    moveLeft(){
        this.x -= 20;
        
        this.tag.style.left = this.x + "px"
    }
    
    moveRight(){
        this.x += 20;
        
        this.tag.style.left = this.x + "px"
    }
    
    moveUp(){
        this.y -=20;
        this.tag.style.top = this.y + "px"
    }
    
    moveDown(){
        this.y +=20;
        this.tag.style.top = this.y + "px"
    }
}

class Ball {
    constructor (x,y,diameter) {
        this.x = x;
        this.y = y;
        
        this.dx = 3;
        this.dy = 3;
        
        this.diameter = diameter;
        
        this.color = "red";
        
        this.tag = this.createTag();
        this.startMoving()
    }
    
    
    createTag() {
        let tag = document.createElement("div");
        tag.classList.add("ball")
        tag.style.position = "absolute";
        tag.style.width = tag.style.height = this.diameter +"px";
        tag.style.background = this.color;
        tag.style.left = this.x + "px";
        tag.style.top = this.y + "px";
        tag.style.borderRadius = "50%";
        document.body.appendChild(tag);
        
        return tag;
    }
    
    moveBy(x,y) {
        this.x+=x;
        this.y+=y;
        
        this.collisionDetect();
        
        this.tag.style.left = this.x + "px";
        this.tag.style.top = this.y + "px";
    }
    
    
    collisionDetect() {
        this.collisionDetectWall();
        this.collisionDetectStick(stick);
        
        for (let i=0; i<bricks.length;i++){
            let brick=bricks[i]
            this.collisionDetectBrick(brick)
        }
        
    }
    collisionDetectWall(){
        if (this.x > window.innerWidth-this.diameter) {
            this.x = window.innerWidth-this.diameter;
            this.dx *= -1;
        } else if (this.x<0){
            this.x=0;
            this.dx *= -1;
        }
        
        if (this.y > window.innerHeight-this.diameter) {
            this.y = window.innerHeight-this.diameter;
            this.dy *= -1;
        } else if (this.y<0) {
            this.y = 0;
            this.dy *= -1
        }
    }
    
    collisionDetectBrick(brick) {
        let xCol = brick.x + brick.width >= this.x && this.x+this.diameter >= brick.x;
        let yCol = brick.y + brick.height >= this.y && this.y+this.diameter >= brick.y;
        
        if (xCol && yCol) {
            this.dx *= -1;
            this.dy *= -1;
            //brick.tag.parentElement.removeChild(brick.tag)
            brick.tag.style.width=0;
            brick.tag.style.height=0;
        }
    }
    
    collisionDetectStick(stick){
        let xCol = stick.x + stick.width >= this.x && this.x+this.diameter >= stick.x;
        let yCol = stick.y + stick.height >= this.y && this.y+this.diameter >= stick.y;
        
        if (xCol && yCol) {
            this.dx *= -1;
            this.dy *= -1;
        }
        
    }
    
    startMoving() {
        this.moveBy(this.dx,this.dy);
        let that = this;
        setTimeout(function(){
            that.startMoving();
        }, 1000/60)
    }
}



const bricks= []
for (let i=0; i<60; i+=20){
    
    for (let j=0; j<500; j+=50 ){
        
        let brick = new Brick(j,i,50,20);
        bricks.push(brick)
    }
}

let stick = new Stick(350,500,100,20);

let ball = new Ball(100,100,25);




