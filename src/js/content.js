import BlockInput from './Components/BlockInput/BlockInput.js';
import Button from './Components/Button/Button.js';

const content = $('.content');

const infoIn = $('<div/>', {
    class: 'infoIn'
});

infoIn.appendTo(content);

//  название компании
let inputName = new BlockInput({
    className: "name",
    type: 'input-text',
    title: "Название:",
    text: "ФСК ЕЭС",
    parent: infoIn,
    left: 280,
    width: 250,
    default: 'Название',
    target: "name"
}).create();

// Цена акции
let inputPrice = new BlockInput({
    className: "price",
    type: 'input',
    title: "Цена:",
    text: "0,004",
    parent: infoIn,
    left: 280,
    sign: "руб",
    default: 100,
    target: "price"
}).create();

//  Куплено лотов
let inputPackageNumber = new BlockInput({
    className: "package-number",
    type: 'input',
    title: "Лотов:",
    text: "1",
    parent: infoIn,
    left: 280,
    sign: "шт.",
    default: 1,
    target: "packageNumber"
}).create();

// Акций в лоте
let inputPackageValue = new BlockInput({
    className: "package-value",
    type: 'input',
    title: "В лоте:",
    text: "1",
    parent: infoIn,
    left: 280,
    sign: "шт.",
    default: 10,
    target: "packageValue"
}).create();

// Ожидаемая доходность
let inputExpectedProfit = new BlockInput({
    className: "expected-profi",
    type: 'input',
    title: "Ожидаемая доходность:",
    parent: infoIn,
    left: 280,
    sign: "руб",
    default: 1,
    target: "expectedProfit"
}).create();

// Расчитать
let btnSubmit = new Button({
    parent: infoIn
}).create();


const infoOut = $('<div/>', {
    class: 'infoOut'
});

infoOut.appendTo(content);

// Стоимость сделки
let labelTransactionValue = new BlockInput({
    className: "transaction-value",
    type: 'label',
    title: "Стоимость сделки:",
    text: "",
    parent: infoOut,
    left: 280,
    sign: "руб",
    width: 'auto',
    default: 1,
    target: "transactionValue"
}).create();

// Комиссия
let labelComission = new BlockInput({
    className: "comission",
    type: 'label',
    title: "Комиссия:",
    text: "",
    parent: infoOut,
    left: 280,
    sign: "руб",
    width: 'auto',
    default: 1,
    target: "comission"
}).create();

// Цена продажи
let labelResultPrice = new BlockInput({
    className: "result-price",
    type: 'label',
    title: "Цена продажи:",
    text: "",
    parent: infoOut,
    left: 280,
    sign: "руб",
    width: 'auto',
    default: 1,
    target: "resultPrice"
}).create();
