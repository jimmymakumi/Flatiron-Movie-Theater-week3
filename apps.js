document.addEventListener('DOMContentLoaded', function (){

    const placeMovie = () => {
        fetch("http://localhost:3000/films")
        .then(res => res.json())
        .then(data =>{
           console.log(data)
            if (data.films && data.films.length > 0){
            const firstMovie = data.films[0]
            const filmImage = document.getElementById("poster");
            const movieTitle = document.getElementById("movieTitle");
            const movieDescription = document.getElementById("movieDescription");
            const runningTime = document.getElementById("runTime");
            const showingTime = document.getElementById("showTime");
            const availableTicket = document.getElementById("ticketsAvailable");
            filmImage.src = firstMovie.poster;
            movieTitle.innerText = firstMovie.title;
            movieDescription.innerText = firstMovie.description;
            runningTime.innerText = `Runtime: ${firstMovie.runtime} minutes`;
            showingTime.innerText =  `Showtime: ${firstMovie.showtime}`;
            availableTicket.innerText = `Tickets Available: (${firstMovie.capacity - firstMovie.tickets_sold})`;
            const ticketBuy = document.getElementById("buyTicket");
            let tickets = Number(firstMovie.capacity - firstMovie.tickets_sold)
            ticketBuy.addEventListener('click',()=>{
                tickets--
                
                if(tickets <= 0){
                    const frstMovie = document.getElementById("1")
                    frstMovie.innerHTML=`${firstMovie.title}  <span class="badge bg-danger me-1">SOLD OUT</span>`
                    availTicket.innerHTML = `Ticketd available:  <span class="badge bg-danger">SOLD OUT</span>`
                }else{
                    availTicket.innerText = `Tickets available: (${tickets})`
                }
                
            })
            }
        })

    }
function showMovieDetails(){
    fetch('http://localhost:3000/films')
    .then(data => data.json())
    .then(response =>{
        filmData = [...response];
        console.log(filmData)
        for (let i =0; i < filmData.length; i++){
            let item = filmData[i];
            console.log(item)
            const movieList = document.createElement("li");
           
            const list = document.getElementById("showingMovie");
            movieList.classList.add("list-item", "border", "border-info", "sinema" );
            movieList.setAttribute('id', `${item.id}`);
            movieList.innerText = item.title;
            console.log(item.title);
            list.appendChild(movieList);
            movieList.addEventListener('click', () => {
                const filmImage = document.getElementById("poster");
                const movieTitle = document.getElementById("movieTitle");
                const filmTitle = document.getElementById("filmTitle");
                const filmDescription = document.getElementById("movieDescription");
                const runTime = document.getElementById("runTime");
                const showTime = document.getElementById("showTime");
                const availableTickets = document.getElementById("ticketsAvailable");
                filmImage.src = item.poster;
                filmTitle.innerText = item.title;
                movieTitle.innerText = item.title;
                filmDescription.innerText = item.description;
                runTime.innerHTML = `Runtime:<span>${item.runtime}</span>`;
                showTime.innerText =`Showtime: ${item.showtime}`
                availableTickets.innerText =`Tickets available: (${item.capacity - item.tickets_sold})`
                const ticketsBuy = document.getElementById("buyTicket")
                // In your placeMovie function, change the IDs like this:
const availTicket = document.getElementById("ticketsAvailable");


movieList.addEventListener('click', () => {

    const movieNameDisplay = document.getElementById("movieTitle");
    

    ticketsBuy.addEventListener('click', () => {
        ticket--;

        if (ticket <= 0) {
            movieNameDisplay.innerHTML = `${item.title} <span class="badge bg-danger">SOLD OUT</span>`;
            availableTickets.innerHTML = `Tickets available: <span class="badge bg-danger">SOLD OUT</span>`;
        } else {
            availableTickets.innerText = `Tickets available: (${ticket})`;
        }
    });
});
                let ticket = Number(item.capacity - item.tickets_sold);
                ticketsBuy.addEventListener('click',()=>{
                    
                    ticket --
                    if(ticket <= 3){
                        movieList.innerHTML =`${item.title} <span class="badge bg-danger">SOLD OUT</span>`
                        availableTickets.innerHTML = `Tickets available: <span class="badge bg-danger">SOLD OUT</span>`
                    }else{
                        availableTickets.innerText = `Tickets available: (${ticket})`
                    }
                })
            })
        }
    })
}
showMovieDetails()
 placeMovie()
})