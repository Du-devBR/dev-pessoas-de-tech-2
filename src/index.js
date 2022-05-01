const containerNewsletterRef = document.querySelector('#containerNewsAdd')

const apiNewslatter = () => {

    fetch('https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=faeeacef7aa24eb88890666f812f29b8')
    .then(response => {
        return response.json()
    })

    .then(data => {

        renderDados(data.articles)
        
    })
    
    function renderDados(dados) {

        for( let i = 0; i < 3; i++) {

            containerNewsletterRef.innerHTML += `
            
            <div class="card_newsletter">
                <div class="img_newsletter">
                    <img src="${dados[i].urlToImage}">
                </div>
                <div class="date_newsletter">
                    <span class="material-icons">calendar_today</span>
                    <p>${dados[i].publishedAt}</p>
                </div>
                <h3>${dados[i].title}</h3>
            </div>

            `

            console.log(dados[i])
        }    
    }
}

apiNewslatter()