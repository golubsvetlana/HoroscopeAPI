
let selectedValue = null;
const btns = document.querySelectorAll('.btn-signs');
const divResult = document.querySelector('.result');

for (let i = 0; i < btns.length; i++) {
    let button = btns[i];
    button.addEventListener('click', async function () {
        selectedValue = button.value;
        // console.log(selectedValue);
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/horoscope?zodiac=${selectedValue}`, {
                headers: { 'X-Api-Key': 'MY_API_KEY' },
                method: "GET",
                contentType: 'application/json'
            });
            if (response.ok) {
                const data = await response.json();
                // show result               
                divResult.innerHTML =
                    `<h2>${data.sign}</h2>    
                    <span>${data.date}</span>
                    <p>${data.horoscope}</p>`;
                  
                divResult.style.display = 'block';
                
                console.log(data);
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error)
        } })
}; 
