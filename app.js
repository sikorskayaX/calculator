document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.button');
    const innerResult = document.querySelector('.result');
    const innerEquation = document.querySelector('.equation');

    let item1 = "";
    let item2 = "";
    let isNum = true;
    let sign = "";

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            currentSymbol = button.value;
            if (button.classList.contains("num"))
            {
                if(isNum)
                {
                    item1 += currentSymbol;
                    innerEquation.innerHTML += currentSymbol;
                }
                else
                {
                    item2 += currentSymbol;
                    innerEquation.innerHTML += currentSymbol;
                }
            }
            else if (button.classList.contains("operation"))
            {
                isNum = false;
                
                {
                    sign = currentSymbol;
                    innerEquation.innerHTML += sign;
                }
            }
            else if (button.classList.contains("equal"))
            {
                item1 = parseInt(item1);
                item2 = parseInt(item2);

                if(sign == "+"){
                    result = item1 + item2;
                    innerResult.innerHTML ="result: " + result;
                }

                item2 = "";
                item1 = result;
            }
            else if (button.classList.contains("clear")){
                item1 = "";
                item2 = "";
                isNum = true;
                sign = "";
                currentSymbol = "";
                result = 0;
                innerEquation.innerHTML = "equation:";
                innerResult.innerHTML = "result: ";
            }
        })
    })

});
