
export const  handleButtonClick = (selector) => {
		
	const id = selector.getAttribute('href').slice(1)
	
	document.getElementById(id).scrollIntoView({ 
		block: "center",
		behavior: "smooth"
	})
}

export const animate = ({timing, draw, duration}) => {

    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
};

export const validate = (lists) => {
    let success = false
    
    const testTextStr = /[а-я\ ]+/gi
    const testEmail = /^([a-z\_\ \.\~\*\']+)(@{1})([a-z]+)(\.)(\w{2,3})$/gi
    const testPhone = /^(\+7|8)\(\d{3}\)\d{3}\-?\d{2}\-?\d{2}$/g
    const testMessage = /[а-яА-Я0-9\-\ \.\,\!]+/gi

 

    lists.forEach(input => {

        input.addEventListener('input', (e) => {

            if(e.target.closest('[name=user_name]') && testTextStr.test(e.target.value) && e.target != '') {
                input.classList.remove('error')
                input.classList.add('done')
                input.style.border = '3px solid green'
            } 
            else if(e.target.closest('[name=user_email]') && !!e.target.value.match(testEmail) && e.target != '') {
                input.classList.remove('error')
                input.classList.add('done')
                input.style.border = '3px solid green'
            } else if(e.target.closest('[name=user_phone]') && !!e.target.value.match(testPhone) && e.target != '') {
                input.classList.remove('error')
                input.classList.add('done')
                input.style.border = '3px solid green'
            } else if(e.target.closest('[name=user_message]') && testMessage.test(e.target.value) && e.target != '') {
                input.classList.remove('error')
                input.classList.add('done')
                input.style.border = '3px solid green'
            } 
            else {
                input.classList.remove('done')
                input.classList.add('error')
                input.style.border = '3px solid red'
            }
        })
    })
    const newlists = Array.from(lists).filter(input => {
        return input.classList.contains('done')
    })
     if(newlists.length === 3 || newlists.length === 4) {
        success = true
     }

    return success 
}