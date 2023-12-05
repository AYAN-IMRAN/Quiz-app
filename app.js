var min = document.getElementById('min')
var sec = document.getElementById('sec')

var minutes = 1;
var seconds = 59;
var intervel;

function start() {
    intervel = setInterval(timer, 1000);

}
 function timer(){
    min.innerHTML = minutes 
    sec.innerHTML = seconds
    seconds --;
    if(seconds == 0){
        minutes --;
        seconds = 59;
    } 
    if(minutes == -1){
        document.getElementById('showresult').style.display = 'block'
        // document.getElementById('box2').style.display = 'none'
        clearInterval(intervel)
        result()
        
    }console.log(timer)
 }


// timer Work

var sawal =[
    {
        question:'Nahw main kalme ky kaha sy behes hoti',
        Option1:'shoro sy',
        Option2:'darmiyan sy',
        Option3:'akhir sy',
        Option4:'ya kahi aur sy',
        ans:'3'
    }

    ,{
        question:'Nahwmir ky musanif hain',
        Option1:'sad ul din',
        Option2:'syed jurjani',
        Option3:'Qasim baloch',
        Option4:'sahib e hidayah',
        ans: '2'
    }

    ,{
        question:'mozoo ki kitni aqsam hai',
        Option1:'1',
        Option2:'4',
        Option3:'5',
        Option4:'2',
        ans: '4'
    }

    ,{
        question:'kalme ki kitni aqsam hai',
        Option1:'3',
        Option2:'4',
        Option3:'18',
        Option4:'2',
        ans: '1'
    }

    ,{
        question:'murab ki kitni aqsam hai',
        Option1:'3',
        Option2:'4',
        Option3:'18',
        Option4:'2',
        ans: '4'
    }

    ,{
        question:'ism ki alamt hai',
        Option1:'18',
        Option2:'8',
        Option3:'11',
        Option4:'12',
        ans: '3'
    }

    
    ,{
        question:'fail ki alamt hai',
        Option1:'11',
        Option2:'8',
        Option3:'13',
        Option4:'16',
        ans: '2'
    }

    
    
    ,{
        question:'harf ki alamat hai',
        Option1:'8',
        Option2:'2',
        Option3:'7',
        Option4:'koi nhi',
        ans: '4'
    }

    
    
    ,{
        question:'ism e mutamakkin ki aqsam hai',
        Option1:'50',
        Option2:'20',
        Option3:'16',
        Option4:'17',
        ans: '3'
    }

    
    
    ,{
        question:'ism e gher mutamakkin ki aqsam hai',
        Option1:'8',
        Option2:'21',
        Option3:'19',
        Option4:'3',
        ans: '1'
    }


]

var count = 0

var quesnum = document.getElementById('Questionnum')
var qsawal = document.getElementById('Questions')

var Option1 = document.getElementById('option1')
var Option2 = document.getElementById('option2')
var Option3 = document.getElementById('option3')
var Option4 = document.getElementById('option4')


quesnum.innerHTML = 'QUESTION NO ' +  [count+1]  +  "of 10"
qsawal.innerHTML =  sawal[count].question


Option1.innerHTML =  sawal[count].Option1
Option2.innerHTML =  sawal[count].Option2
Option3.innerHTML =  sawal[count].Option3
Option4.innerHTML =  sawal[count].Option4


var nextbutton = document.getElementById('nextbutton')
var resultbutton = document.getElementById('resultbutton')
var score = 0;

var tick = document.getElementsByName('opt')
function next(){

    count ++;
    quesnum.innerHTML = 'QUESTION NO ' +  [count+1]  +  "of"  + "10"
    qsawal.innerHTML =  sawal[count].question
    
    
    Option1.innerHTML =  sawal[count].Option1
    Option2.innerHTML =  sawal[count].Option2
    Option3.innerHTML =  sawal[count].Option3
    Option4.innerHTML =  sawal[count].Option4
                nextbutton.disabled = true
                nextbutton.className = 'Nextbutton';
            resultbutton.disabled = true
    check()
    if(count === 9){
        nextbutton.className = 'hide'
        
        resultbutton.className= 'Nextbutton'
    }
}

function enable(){
    nextbutton.disabled = false
    resultbutton.disabled = false

}
function check(){
    for(var i = 0; i <= tick.length; i++){
        if(tick[i]?.checked){
            tick[i].checked = false;
            nextbutton.disabled = true 
            resultbutton.disabled = true
            if(tick[i].value === sawal[count-1].ans){
                score += 10;
            }
        } 
    
    }
}

function result(){
    count++;
    check();
    document.getElementById('box2').style.display = 'none'
    document.getElementById('showresult').style.display = 'block';
    document.getElementById('marks').innerHTML = score
    document.getElementById('Correctans').innerHTML = score/10
    document.getElementById('Wrongans').innerHTML = sawal.length -(score/10)
    document.getElementById('Persentage').innerHTML = score/100*100
    if(score >= 40){
        document.getElementById('result').innerHTML= "Pass"
    }else{
        document.getElementById('result').innerHTML = 'Fail'
    }
}
start()