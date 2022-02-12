function minusTopRow(){
    var value = document.getElementById("toprow");
    if(parseInt(value.innerHTML)>0){
        value.innerHTML = (value.innerHTML)-1;
        var size = document.getElementById("head");
        size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
        value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
        if(parseInt(value.innerHTML)>2){
            value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)==0){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
        }
    }
}
function plusTopRow(){
    var value = document.getElementById("toprow");
    value.innerHTML = parseInt(value.innerHTML) + 1;
    var size = document.getElementById("head");
    size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
    value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
    if(parseInt(value.innerHTML)>2){
        value.style.backgroundColor='rgb(255, 113, 84)';
    }else if(parseInt(value.innerHTML)==0){
        value.style.backgroundColor='rgb(115, 250, 5)';
    }
    else{
        value.style.backgroundColor='rgb(232, 217, 49)';
    }
}
function minusSecondRow(){
    let value = document.getElementById("secondrow");
    if(parseInt(value.innerHTML)>0){
        value.innerHTML = (value.innerHTML)-1;
        var size = document.getElementById("second");
        size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
        value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
        if(parseInt(value.innerHTML)>2){
            value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)<=1){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
        }
    }
}
function plusSecondRow(){
    let value = document.getElementById("secondrow");
    value.innerHTML = parseInt(value.innerHTML)+1;
    var size = document.getElementById("second");
    size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
    value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
    if(parseInt(value.innerHTML)>2){
        value.style.backgroundColor='rgb(255, 113, 84)';
    }else if(parseInt(value.innerHTML)<=1){
        value.style.backgroundColor='rgb(115, 250, 5)';
    }
    else{
        value.style.backgroundColor='rgb(232, 217, 49)';
    }
}
function minusThirdRow(){
    let value = document.getElementById("thirdrow");
    if(parseInt(value.innerHTML)>0){
        value.innerHTML = (value.innerHTML)-1;
        var size = document.getElementById("third");
        size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
        value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
        if(parseInt(value.innerHTML)>2){
            value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)==2){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
        }
    }
}
function plusThirdRow(){
    let value = document.getElementById("thirdrow");
    value.innerHTML = parseInt(value.innerHTML)+1;
    var size = document.getElementById("third");
    size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
    value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
    if(parseInt(value.innerHTML)>2){
        value.style.backgroundColor='rgb(255, 113, 84)';
    }else if(parseInt(value.innerHTML)==2){
        value.style.backgroundColor='rgb(115, 250, 5)';
    }
    else{
        value.style.backgroundColor='rgb(232, 217, 49)';
    }
}
function minusFourthRow(){
    let value = document.getElementById("fourthrow");
    if(parseInt(value.innerHTML)>0){
        value.innerHTML = (value.innerHTML)-1;
        var size = document.getElementById("fourth");
        size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
        value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
        var target = document.getElementById("target");
        if(target.innerHTML=="For Adults:"){
        if(parseInt(value.innerHTML)<3){
            value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)==3){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
        }
    }
    }else{
            if(parseInt(value.innerHTML)<5){
                value.style.backgroundColor='rgb(255, 113, 84)';
            }else if(parseInt(value.innerHTML)==5){
                value.style.backgroundColor='rgb(115, 250, 5)';
            }
            else{
                value.style.backgroundColor='rgb(232, 217, 49)';
            }
    }
    
}
function plusFourthRow(){
    let value = document.getElementById("fourthrow");
    value.innerHTML = parseInt(value.innerHTML)+1;
    var size = document.getElementById("fourth");
    size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
    value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
    var target = document.getElementById("target");
    if(target.innerHTML=="For Adults:"){
        if(parseInt(value.innerHTML)<3){
    if(parseInt(value.innerHTML)<3){
        value.style.backgroundColor='rgb(255, 113, 84)';
    }else if(parseInt(value.innerHTML)==3){
        value.style.backgroundColor='rgb(115, 250, 5)';
    }
    else{
        value.style.backgroundColor='rgb(232, 217, 49)';
    }
}
}else{
        if(parseInt(value.innerHTML)<5){
            value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)==5){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
        }
}
}

function minusFifthRow(){
    let value = document.getElementById("fifthrow");
    if(parseInt(value.innerHTML)>0){
        value.innerHTML = (value.innerHTML)-1;
        var size = document.getElementById("fifth");
        size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
        value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
        var target = document.getElementById("target");
        if(target.innerHTML=="For Adults:"){
        if(parseInt(value.innerHTML)<3){
            value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)==3){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
        }
    }else{
        if(parseInt(value.innerHTML)<3){
            value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)==3){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
        }
    }
    }
}
function plusFifthRow(){
    let value = document.getElementById("fifthrow");
    value.innerHTML = parseInt(value.innerHTML)+1;
    var size = document.getElementById("fifth");
    size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
    value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
    var target = document.getElementById("target");
    if(target.innerHTML=="For Adults:"){
    if(parseInt(value.innerHTML)<3){
        value.style.backgroundColor='rgb(255, 113, 84)';
    }else if(parseInt(value.innerHTML)>=3 && parseInt(value.innerHTML)<=5){
        value.style.backgroundColor='rgb(115, 250, 5)';
    }
    else{
        value.style.backgroundColor='rgb(232, 217, 49)';
    }
}else{
    if(parseInt(value.innerHTML)<3){
        value.style.backgroundColor='rgb(255, 113, 84)';
    }else if(parseInt(value.innerHTML)>=3 && parseInt(value.innerHTML)<=7){
        value.style.backgroundColor='rgb(115, 250, 5)';
    }
    else{
        value.style.backgroundColor='rgb(232, 217, 49)';
    }
}
}
function minusSixthRow(){
    let value = document.getElementById("sixthrow");
    if(parseInt(value.innerHTML)>0){
    value.innerHTML = (value.innerHTML)-1;
    var size = document.getElementById("sixth");
    size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
    value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
    var target = document.getElementById("target");
    if(target.innerHTML=="For Adults:"){
        if(parseInt(value.innerHTML)<5){
            value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)>=5 && parseInt(value.innerHTML)<=7){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
        }
    }else{
    if(parseInt(value.innerHTML)<5){
        value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)>=5 && parseInt(value.innerHTML)<=7){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
            }
        }
    }
}
function plusSixthRow(){
    let value = document.getElementById("sixthrow");
    value.innerHTML = parseInt(value.innerHTML)+1;
    var size = document.getElementById("sixth");
    size.style.height=`${(parseInt(value.innerHTML)*10)+50}px`;
    value.style.marginTop=`${parseInt(value.innerHTML)+2.5}%`;
    var target = document.getElementById("target");
    if(target.innerHTML=="For Adults:"){
        if(parseInt(value.innerHTML)<5){
            value.style.backgroundColor='rgb(255, 113, 84)';
        }else if(parseInt(value.innerHTML)>=5 && parseInt(value.innerHTML)<=7){
            value.style.backgroundColor='rgb(115, 250, 5)';
        }
        else{
            value.style.backgroundColor='rgb(232, 217, 49)';
        }
    }else{
    if(parseInt(value.innerHTML)<5){
        value.style.backgroundColor='rgb(255, 113, 84)';
    }else if(parseInt(value.innerHTML)>=5 && parseInt(value.innerHTML)<=7){
        value.style.backgroundColor='rgb(115, 250, 5)';
    }
    else{
        value.style.backgroundColor='rgb(232, 217, 49)';
    }
}

}

function displayButtons(){
    var button1 = document.getElementById("but1-");
    var button2 = document.getElementById("but1+");
    button1.style.visibility='visible';
    button2.style.visibility='visible';

}
function hideButtons(){
    var button1 = document.getElementById("but1-");
    var button2 = document.getElementById("but1+");
    button1.style.visibility='hidden';
    button2.style.visibility='hidden';
}

function displayButtons2(){
    var button1 = document.getElementById("but2-");
    var button2 = document.getElementById("but2+");
    button1.style.visibility='visible';
    button2.style.visibility='visible';
}
function hideButtons2(){
    var button1 = document.getElementById("but2-");
    var button2 = document.getElementById("but2+");
    button1.style.visibility='hidden';
    button2.style.visibility='hidden';
}
function displayButtons3(){
    var button1 = document.getElementById("but3-");
    var button2 = document.getElementById("but3+");
    button1.style.visibility='visible';
    button2.style.visibility='visible';
}
function hideButtons3(){
    var button1 = document.getElementById("but3-");
    var button2 = document.getElementById("but3+");
    button1.style.visibility='hidden';
    button2.style.visibility='hidden';
}
function displayButtons4(){
    var button1 = document.getElementById("but4-");
    var button2 = document.getElementById("but4+");
    button1.style.visibility='visible';
    button2.style.visibility='visible';
}
function hideButtons4(){
    var button1 = document.getElementById("but4-");
    var button2 = document.getElementById("but4+");
    button1.style.visibility='hidden';
    button2.style.visibility='hidden';
}
function displayButtons5(){
    var button1 = document.getElementById("but5-");
    var button2 = document.getElementById("but5+");
    button1.style.visibility='visible';
    button2.style.visibility='visible';
}
function hideButtons5(){
    var button1 = document.getElementById("but5-");
    var button2 = document.getElementById("but5+");
    button1.style.visibility='hidden';
    button2.style.visibility='hidden';
}
function displayButtons6(){
    var button1 = document.getElementById("but6-");
    var button2 = document.getElementById("but6+");
    button1.style.visibility='visible';
    button2.style.visibility='visible';
}
function hideButtons6(){
    var button1 = document.getElementById("but6-");
    var button2 = document.getElementById("but6+");
    button1.style.visibility='hidden';
    button2.style.visibility='hidden';
}

function dateSave(){
    var dateList = document.getElementById("dateList");
    var currentDate = new Date();
    var date = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getDate();
    dateList.innerHTML = date;

    var but = document.getElementById("dateBut");
    but.style.display='none';
}

function changeToAdult(){
    let target = document.getElementById("target");
    let value1 = document.getElementById("toprow");let value2 = document.getElementById("secondrow");let value3 = document.getElementById("thirdrow");let value4 = document.getElementById("fourthrow");let value5 = document.getElementById("fifthrow");let value6 = document.getElementById("sixthrow");
    value1.innerHTML=0;value2.innerHTML=0;value3.innerHTML=0;value4.innerHTML=0;value5.innerHTML=0;value6.innerHTML=0;
    plusTopRow();minusTopRow();plusSecondRow();minusSecondRow();plusThirdRow();minusThirdRow();plusFourthRow();minusFourthRow();plusFifthRow();minusFifthRow();plusSixthRow();minusSixthRow()
    target.innerHTML="For Adults:";
}
function changeToChild(){
    let target = document.getElementById("target");
    let value1 = document.getElementById("toprow");let value2 = document.getElementById("secondrow");let value3 = document.getElementById("thirdrow");let value4 = document.getElementById("fourthrow");let value5 = document.getElementById("fifthrow");let value6 = document.getElementById("sixthrow");
    value1.innerHTML=0;value2.innerHTML=0;value3.innerHTML=0;value4.innerHTML=0;value5.innerHTML=0;value6.innerHTML=0;
    plusTopRow();minusTopRow();plusSecondRow();minusSecondRow();plusThirdRow();minusThirdRow();plusFourthRow();minusFourthRow();plusFifthRow();minusFifthRow();plusSixthRow();minusSixthRow();
    target.innerHTML="For Children:";
}
function changeToTeen(){
    let target = document.getElementById("target");
    let value1 = document.getElementById("toprow");let value2 = document.getElementById("secondrow");let value3 = document.getElementById("thirdrow");let value4 = document.getElementById("fourthrow");let value5 = document.getElementById("fifthrow");let value6 = document.getElementById("sixthrow");
    value1.innerHTML=0;value2.innerHTML=0;value3.innerHTML=0;value4.innerHTML=0;value5.innerHTML=0;value6.innerHTML=0;
    plusTopRow();minusTopRow();plusSecondRow();minusSecondRow();plusThirdRow();minusThirdRow();plusFourthRow();minusFourthRow();plusFifthRow();minusFifthRow();plusSixthRow();minusSixthRow();
    target.innerHTML="For Teens:";
}