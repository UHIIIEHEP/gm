import './Button.scss';
import {calculate} from '../../calculation.js';
import {roundNumber} from '../../helper.js';

class Button{
    constructor(opt={}){
        this.className = opt.className ? opt.className : "";
        this.text = opt.text ? opt.text : "Расчитать";
        this.parent = opt.parent ? opt.parent : null;
    }

    create(){
        let btn = $('<button/>',{
            class: `button ${this.className}`,
            text: `${this.text}`
        }).appendTo(this.parent);

        btn.on('click', function(){
            let obj = {
                'name': "",
                'price': 0,
                packageNumber: 0,
                packageValue: 0,
                expectedProfit: 0

            };
            $('input').toArray().forEach(el=>{
                obj[`${$(el).data("target")}`]=el.value
              //  console.log(`${obj[$(el).data("target")]} => ${el.value}` ) 
              
            })
          //  console.log(obj)
          let resultObj = calculate(obj);

          $('.label-out').toArray().forEach(el=>{
              for(let key in resultObj){
                  
                  if($(el).data("target") == key){
                      console.log($(el).data("target"))
                    $(el).html(roundNumber(resultObj[`${$(el).data("target")}`]))
                  }
              }
            //   console.log("result ",el.value = resultObj[`${$(el).data("target")}`])
          })
        })
    }

}


export default Button;