//функция округления до сотых

export function roundNumber(num){
    num = Math.ceil(num*100)/100;
    return num;
}