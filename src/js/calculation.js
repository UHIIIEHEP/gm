
export function calculate(obj){
    for (let key in obj){
        if(typeof(Number(obj[key]) ) == 'number'){
            obj[key] = Number(obj[key])
        }        
    }

    let numberPappir = obj.packageNumber * obj.packageValue
    let price = obj.price* numberPappir;
    let comission = price*0.035/100;
    let resultPrice = (price + comission + obj.expectedProfit)/numberPappir 
    return {
        transactionValue : price,
        comission: comission,
        resultPrice: resultPrice
    }
}