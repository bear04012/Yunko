class Calendar {
    constructor(calendarTag) {
        this.today = new Date();
        this.selectedDate = this.today;
        
        /*why selectedDate */
        
        this.calendarTag = calendarTag;
        /*What is this for*/
        this.populateCalendar();
        
    }
    
    populateCalendar() {
        this.calendarTag.innerHTML = "";
        
        let numDays = this.getNumDays();
        let firstDay = this.getFirstDay();
        
        for (let i=0; i < firstDay; i++){
            let dateTag = this.createDateTag();
            this.calendarTag.appendChild(dateTag);
            /* is this the empty spot? */
        }
        
        for (let date = 1; date <= numDays ; date++){
            let dateTag = this.createDateTag(date);
            this.calendarTag.appendChild(dateTag);
        }
        
        MONTH_TAG.innerText = MONTH_NAMES[this.selectedDate.getMonth()];
    }
    
    getNumDays() {
        let d = new Date(this.selectedDate.getTime());  // timestamp
       
        let lastDate;
       
        while(true) {
            if ( d.getMonth() !== this.selectedDate.getMonth() ){
                return lastDate;
            }
            
            lastDate = d.getDate();
            d.setDate(d.getDate() + 1);
        }
    }
    
    getFirstDay() {
        let d = new Date(this.selectedDate.valueOf());
        d.setDate(1);
        return d.getDay();
        
    }
    
    createDateTag(dateNum) {
        let tag = document.createElement("div");
        if (dateNum) {
            if (dateNum === this.selectedDate.getDate()){
                tag.classList.add("today");
            }
            tag.classList.add("date");
            tag.innerText = dateNum;
            
        }
        
        return tag;
    }
    
    setMonth(offset) {
        this.selectedDate.setMonth(this.selectedDate.getMonth()+offset);
        this.populateCalendar();
    }
    
}


const CALENDAR_TAG = document.querySelector("#calendar");

const DAY_TAG = document.querySelector("#day");

const MONTH_TAG = document.querySelector("#month")

const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']

for (let i=0; i<7; i++){
    let day = document.createElement("div");
    day.classList.add("day");
    day.innerText = days[i%days.length];
    DAY_TAG.appendChild(day);
}

/*
let today= new Date();
let selectedDay=today
let d = new Date(selectedDay)
d.setMonth(1)
alert(d)
*/

let calendar = new Calendar(CALENDAR_TAG);

