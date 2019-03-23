/* функция округления до сотых */

export function roundNumber (num) {
  num = Math.ceil ( num * 100 ) / 100
  return round(num)
}

/* функция добавления тыс млн млрд */

function round(num){
    let strNum;
    let outObj = {};
    outObj = postfix(num, 0)
    function postfix(numeric, index){
        numeric /= 1000;
        if(index > 10){
            console.error("Таких цифр не бывыает. (helper.js -> round(num))")            
        }
        let ii = 1;
        if(outObj.index == 0){
            ii=10
        }
        if(numeric < ii){
            return {value: numeric*1000, index: index}
        }else{
            index++;
            return postfix(numeric, index);
        }
    }
    outObj.value = Math.ceil(outObj.value*100)/100;
    switch(outObj.index){
        case 0: strNum = outObj.value; break;
        case 1: strNum = outObj.value + " тыс."; break;
        case 2: strNum = outObj.value + " млн."; break;  
        case 3: strNum = outObj.value + " млрд."; break;  
        default: strNum = outObj.value + " очень много "; break;          
    }

    return strNum;
}