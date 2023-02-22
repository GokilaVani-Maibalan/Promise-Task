

async function api() {

    a = fetch('https://api.getfestivo.com/data/countries');
    out = await a;
    data = await out.json();
    console.log(data)

    let parent = document.querySelector('.container');

    // 3 columns per row is created to display 3 cards in a row and its details
    //for loop used to iterate the necessary data of the countries
    for (let i = 1; i < data.length; i += 3) {
        try {


            let child = document.createElement('div');
            child.classList.add("row");

            let code = data[i].codeAlpha3;
            let code_1 = data[i].codeAlpha2.toLowerCase();

            let col1 = document.createElement('div');
            col1.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

            let card_1 = document.createElement('div');
            card_1.classList.add("card", "h-100");

            let card_body_1 = document.createElement('div');
            card_body_1.classList.add("card-body");
            card_body_1.setAttribute('code', code);
            card_body_1.setAttribute('code1', code_1);

            let country_name_1 = document.createElement('div');
            country_name_1.classList.add("card-header");
            country_name_1.innerText = data[i].name;
            card_body_1.append(country_name_1);


            let list_1 = document.createElement('ul');
            list_1.classList.add("list-group", "list-group-flush");


            let name_1 = document.createElement('li');
            name_1.classList.add("list-group-item");
            name_1.innerHTML = `<span> Name: </span>${data[i].name}`;
            list_1.append(name_1)


            let country_code_1 = document.createElement('li');
            country_code_1.classList.add("list-group-item");
            country_code_1.innerHTML = `<span> Country Code: </span> ${data[i].codeAlpha2}`
            list_1.append(country_code_1)


            let currency_1 = document.createElement('li');
            currency_1.classList.add("list-group-item");
            currency_1.innerHTML = `<span> Currency: </span> ${data[i].currency}`;
            list_1.append(currency_1)

            let languages_1 = document.createElement('li');
            languages_1.classList.add("list-group-item");
            languages_1.innerHTML = `<span> Languages: </span> ${data[i].languages}`;
            list_1.append(languages_1)

            let button_1 = document.createElement('button');
            button_1.setAttribute('type', 'button');
            button_1.classList.add("btn", "btn-secondary");
            button_1.setAttribute('onclick', 'holiday(this)');
            button_1.setAttribute('data-bs-toggle', 'modal');
            button_1.setAttribute('data-bs-target', '#staticBackdrop');
            button_1.innerText = 'Holidays';

            // let button_11 = document.createElement('button');
            // button_11.setAttribute('type', 'button');
            // button_11.classList.add("btn", "btn-primary");
            // button_11.setAttribute('onclick', 'news(this)');
            // button_11.setAttribute('data-bs-toggle', 'modal');
            // button_11.setAttribute('data-bs-target', '#staticBackdrop');
            // button_11.innerText = 'News Update';


            card_body_1.append(list_1);
            card_body_1.append(button_1);
            // card_body_1.append(button_11);
            card_1.append(card_body_1);
            col1.append(card_1);
            child.append(col1);




            let col2 = document.createElement('div');
            col2.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

            let code2 = data[i + 1].codeAlpha3;
            let code22 = data[i + 1].codeAlpha2.toLowerCase();

            let card_2 = document.createElement('div');
            card_2.classList.add("card", "h-100");

            let card_body_2 = document.createElement('div');
            card_body_2.classList.add("card-body");
            card_body_2.setAttribute('code', code2);
            card_body_2.setAttribute('code1', code22);


            let country_name_2 = document.createElement('div');
            country_name_2.classList.add("card-header");
            country_name_2.innerText = data[i + 1].name;
            card_body_2.append(country_name_2);


            let list_2 = document.createElement('ul');
            list_2.classList.add("list-group", "list-group-flush");


            let name_2 = document.createElement('li');
            name_2.classList.add("list-group-item");
            name_2.innerHTML = `<span> Name: </span>${data[i + 1].name}`;
            list_2.append(name_2)


            let country_code_2 = document.createElement('li');
            country_code_2.classList.add("list-group-item");
            country_code_2.innerHTML = `<span> Country Code: </span> ${data[i + 1].codeAlpha2}`
            list_2.append(country_code_2)


            let currency_2 = document.createElement('li');
            currency_2.classList.add("list-group-item");
            currency_2.innerHTML = `<span> Currency: </span> ${data[i + 1].currency}`;
            list_2.append(currency_2)

            let languages_2 = document.createElement('li');
            languages_2.classList.add("list-group-item");
            languages_2.innerHTML = `<span> Languages: </span> ${data[i + 1].languages}`;
            list_2.append(languages_2)

            let button_2 = document.createElement('button');
            button_2.setAttribute('type', 'button');
            button_2.classList.add("btn", "btn-secondary");
            button_2.setAttribute('onclick', 'holiday(this)');
            button_2.setAttribute('data-bs-toggle', 'modal');
            button_2.setAttribute('data-bs-target', '#staticBackdrop');
            button_2.innerText = 'Holidays';

            card_body_2.append(list_2);
            card_body_2.append(button_2);
            // card_body_2.append(button_22);
            card_2.append(card_body_2);
            col2.append(card_2);
            child.append(col2);

            let col3 = document.createElement('div');
            col3.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

            let code3 = data[i + 2].codeAlpha3;
            let code33 = data[i + 2].codeAlpha2.toLowerCase();

            let card_3 = document.createElement('div');
            card_3.classList.add("card", "h-100");

            let card_body_3 = document.createElement('div');
            card_body_3.classList.add("card-body");
            card_body_3.setAttribute('code', code3);
            card_body_3.setAttribute('code1', code33);

            let country_name_3 = document.createElement('div');
            country_name_3.classList.add("card-header");
            country_name_3.innerText = data[i + 2].name;
            card_body_3.append(country_name_3);

            let list_3 = document.createElement('ul');
            list_3.classList.add("list-group", "list-group-flush");

            let name_3 = document.createElement('li');
            name_3.classList.add("list-group-item");
            name_3.innerHTML = `<span> Name: </span>${data[i + 2].name}`;
            list_3.append(name_3)

            let country_code_3 = document.createElement('li');
            country_code_3.classList.add("list-group-item");
            country_code_3.innerHTML = `<span> Country Code: </span> ${data[i + 2].codeAlpha2}`
            list_3.append(country_code_3)

            let currency_3 = document.createElement('li');
            currency_3.classList.add("list-group-item");
            currency_3.innerHTML = `<span> Currency: </span> ${data[i + 2].currency}`;
            list_3.append(currency_3)

            let languages_3 = document.createElement('li');
            languages_3.classList.add("list-group-item");
            languages_3.innerHTML = `<span> Languages: </span> ${data[i + 2].languages}`;
            list_3.append(languages_3)

            let button_3 = document.createElement('button');
            button_3.setAttribute('type', 'button');
            button_3.classList.add("btn", "btn-secondary");
            button_3.setAttribute('onclick', 'holiday(this)');
            button_3.setAttribute('data-bs-toggle', 'modal');
            button_3.setAttribute('data-bs-target', '#staticBackdrop');
            button_3.innerText = 'Holidays';

            card_body_3.append(list_3);
            card_body_3.append(button_3);
            // card_body_3.append(button_33);
            card_3.append(card_body_3);
            col3.append(card_3);
            child.append(col3);

            parent.append(child);

        }
        catch {

        }
    }
}

api();


// modal created to pop up the holiday details when the button is clicked

let parent_main = document.querySelector('body');
function createPopUp(header_name) {
    let popUp = document.createElement('div');
    popUp.classList.add("modal", "fade");
    popUp.setAttribute('id', 'staticBackdrop');
    popUp.setAttribute('data-bs-backdrop', 'static');
    popUp.setAttribute('data-bs-keyboard', 'false')
    popUp.setAttribute('tabindex', '-1');
    popUp.setAttribute('aria-labelledby', 'staticBackdropLabel');
    popUp.setAttribute('aria-hidden', 'true')

    let dialog = document.createElement('div');
    dialog.classList.add("modal-dialog");

    let content = document.createElement('div');
    content.classList.add("modal-content");

    let head = document.createElement('div');
    head.classList.add("modal-header");

    let title = document.createElement('h1');
    title.classList.add("modal-title", "fs-5");
    title.setAttribute('id', 'staticBackdropLabel')
    title.innerText = header_name;

    let btn = document.createElement('button');
    btn.classList.add('btn-close');
    btn.setAttribute('type', 'button');
    btn.setAttribute('data-bs-dismiss', 'modal');
    btn.setAttribute('aria-label', 'close');

    let body = document.createElement('div');
    body.classList.add("modal-body");


    let foot = document.createElement('div');
    foot.classList.add("modal-footer");

    let btn1 = document.createElement('button');
    btn1.classList.add('btn', 'btn-dark');
    btn1.setAttribute('type', 'button');
    btn1.setAttribute('data-bs-dismiss', 'modal');
    btn1.innerText = 'Close';

    head.append(title);
    head.append(btn);
    foot.append(btn1);
    content.append(head);
    content.append(body);
    content.append(foot);
    dialog.append(content);
    popUp.append(dialog);
    return popUp;
}

// createPopUp('')
let popUp = createPopUp('Holidays')
parent_main.append(popUp);



// async function to fetch the holidays of particular country
async function holiday(e) {
    console.log(e);
    console.log(e.parentElement)
    let popUp = createPopUp('Holidays')
    parent_main.replaceChild(popUp, document.getElementById('staticBackdrop'));
    parent_main.append(popUp);

    let view = document.querySelector('#staticBackdrop .modal-body') // to get the modal-body in which the data needs to be dispalyed

    let parent = e.parentElement; // to take parent element and fetch the country code which is needed to be used for  specified API fetch

    let code = parent.getAttribute('code');


    async function holiday_api() {
        a = fetch(`https://api.getfestivo.com/v2/holidays?api_key=9b8b53dbb3f5d9d0474d5a7f5217a6da&country=${code}&year=2022`)
        out1 = await a;
        output = await out1.json();

        console.log(output.holidays)

        // for loop to iterate holidays and take the name and date of each holiday
        for (let i = 0; i < output.holidays.length; i++) {
            let holiday_name = document.createElement('label'); // tag created for displaying name of the holiday
            holiday_name.innerHTML = `<span>Name: </span> ${output.holidays[i].name} <br>`;
            holiday_date = document.createElement('p') //// tag created for displaying date of the holiday
            holiday_date.innerHTML = `<span>Date: </span> ${output.holidays[i].date} <br>`;
            view.append(holiday_name);
            view.append(holiday_date) // append the name and date to the modal body
        }

    }

    holiday_api()

}

// async function to fetch the news of particular country
async function news() {
    let popUp = createPopUp('Dictionary')
    parent_main.removeChild(document.getElementById('staticBackdrop'))
    parent_main.appendChild(popUp);
    // parent_main.append(popUp1);
    console.log(parent_main)

    let input_data = document.querySelector('input');
    let word = input_data.value;
    console.log(word)
    let a = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`) //promise
    out1 = await a //response
    data = await out1.json(); //promise //object
    console.log(data)
    console.log(data[0].word)
    console.log(data[0].meanings[0].synonyms[0])
    console.log(data[0].meanings[0].definitions[0].definition)
    // console.log(data[0].phonetics[1].text)
    let synonym = data[0].meanings[0].synonyms;

    let view = popUp.querySelector('#staticBackdrop .modal-body')// modal body to display news update
    console.log(view);
    // for loop to iterate holidays and take all the news and their direct url
    view.innerHTML = `<span>Searched text: </span><p>${data[0].word}</p>
      <span>Phonetic: </span><p>${data[0].phonetics[1]}</p>`


    // parent_main.append(view)

    // [0].word;
    // [0].meanings[0].synonyms
    // [0].meanings[0].definitions[0i].definition;
    // [0].phonetics[1].text



}

