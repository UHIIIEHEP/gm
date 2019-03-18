import './BlockInput.scss';

class blockInput{
    constructor(opt={}){
        this.className = opt.className? opt.className:"URA";
        this.type = opt.type? opt.type: 'input';
        this.title = opt.title? opt.title: '';
        this.text = opt.text? opt.text: '';
        this.parent = opt.parent? opt.parent: null;
        this.left = opt.left? opt.left: 50;
        this.width = opt.width? opt.width: 150;
        this.sign = opt.sign? opt.sign : "";
        this.target = opt.target ? opt.target : "no";
        this.default = opt.default ? opt.default : 10;
    }

    create(){
        let globalValue;

        let blockElement = $('<div/>',{
            class: `block ${this.className}`
        }).appendTo(this.parent);

        let labelElement = $('<label/>',{
            class: `label label-${this.className}`,
            text: `${this.title} `
        }).appendTo(blockElement);

        let inputTextElement;

        switch(this.type){
            case 'input':
            default:
                inputTextElement = $(`<input 
                    class='input input-${this.className}' 
                    type ="number" 
                    value = ${this.default}
                />`).appendTo(blockElement);
            break;

            case 'input-text':
                inputTextElement = $(`<input 
                    class='input-text input-text-${this.className}' 
                    type ="text" 
                    value = ${this.default}
                />`).appendTo(blockElement);
            break;

            case 'label':                
                inputTextElement = $('<label/>',{
                    class: `label-out label-out-${this.className}`,
                    text: `${this.text} `
                }).appendTo(blockElement);
            break;

            case 'label':                
                inputTextElement = $('<label/>',{
                    class: `label-out label-out-${this.className}`,
                    text: `${this.text} `
                }).appendTo(blockElement);
            break;

            
        }
        inputTextElement.data("target", this.target)
        let leftPos = inputTextElement.offset().left < this.left ? this.left: inputTextElement.offset().left
        inputTextElement
            .offset({left: leftPos})
            .width(this.width);

        let labelSign = $('<label/>',{
            class: `label-sign label-sign-${this.className}`,
            text: `${this.sign} `
        }).appendTo(blockElement);

        labelSign
            .offset({
                left: this.parent.position().left + inputTextElement.position().left + inputTextElement.width() + 10
            })            
    }
}

export default blockInput;