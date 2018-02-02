class Match {
    constructor(gameDiv, size) {
        this.fruits = ['🍏', '🍎', '🍐', '🍊', '🍋'];
        this.gameDiv = gameDiv;
        this.gameDiv.classList.add("gameDiv");
        this.gameDiv.style.gridTemplateColumns = "repeat(" + size + ", 50px)";
        this.size = size;
        this.array = this.generateArray(size);
        this.render();
    }
    
    generateArray(size){
        let ary=new Array(size);

        for (let r=0;r<size;r++){
            ary[r]=new Array(size);
            for (let c=0;c<ary[0].length;c++){
                ary[r][c] = {
                    fruit : this.fruits[Math.floor(Math.random()*this.fruits.length)],
                    selected : false
                };
            }
        }
        return ary
        
    }
    
    render() {
        this.gameDiv.innerHTML = "";
        for (let r=0;r<this.size;r++){
            for (let c=0;c<this.size;c++){
                let tag = document.createElement("div");
                tag.classList.add("cell");
                tag.innerText = this.array[r][c].fruit;
                let that = this;
                tag.addEventListener('click', function() {
                    that.onClick(r,c);
                    
                });
                this.gameDiv.appendChild(tag);
                
                
            }
        }
    }
    
    onClick(r,c){
        this.checkCell(r,c, this.array[r][c].fruit);
        console.log(this.array);
        let that = this;
        setTimeout(function() {
            that.removeSelected();
        },1000);
    }
    removeSelected(){
        for (let r=0;r<this.array.length;r++){
            for (let c=0;c<this.array[0].length;c++){
                if (this.array[r][c].selected){
                    this.array[r][c].fruit = "";
                    this.array[r][c].selected = false;
                }
            }
        }
        this.render();
        
        let that = this;
        setTimeout(function() {
            that.fall();
        },300);
        setTimeout(function() {
            that.supply();
        },300);
    }
    
    fall(){
        let count=0;
        for(let r=this.array.length-1;r>0;r--){
            for (let c=0;c<this.array[0].length;c++){
                if (this.array[r][c].fruit == '' && this.array[r-1][c].fruit != ''){
                    this.array[r][c].fruit = this.array[r-1][c].fruit;
                    this.array[r-1][c].fruit = '';
                    count++;
                }
            }
        }
        this.render();
        
        if (count > 0) {
            let that = this;
            setTimeout(function() {
                that.fall();
            }, 1000/10);
        }
    }
    
    supply() {
        let count=0;
        for(let c=0;c<this.array[0].length;c++){
            if (this.array[0][c].fruit ==''){
                this.array[0][c].fruit = this.fruits[Math.floor(Math.random()*this.fruits.length)];
                count++;
            }
        }
        
        if(count > 0){
            let that = this;
            setTimeout(function() {
                that.supply();
            }, 1000/10)
        }
    }
    
    selectCell(r,c) {
        let cell = this.gameDiv.querySelectorAll(".cell")[(r*this.size)+c];
        cell.classList.add("selected");
    }
    
    checkCell(r,c,fruit){
        if (r < 0 || r >= this.size || c < 0 || c >= this.size) {
            return;
        }
        else if (this.array[r][c].fruit !== fruit) {
            return;
        }
        else if (this.array[r][c].selected) {
            return;
        }
        
        this.selectCell(r, c);
        this.array[r][c].selected = true;
        
        this.checkCell(r-1, c, fruit);
        this.checkCell(r+1, c, fruit);
        this.checkCell(r, c-1, fruit);
        this.checkCell(r, c+1, fruit);
    }
}





let gameDiv = document.querySelector("div");

new Match (gameDiv,8);

