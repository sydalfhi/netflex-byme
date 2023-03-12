const input = document.querySelector('#textcari');
const cari = document.querySelector('.cari');
const datafilm = document.querySelector('#datafilm');

async function mulai(para) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=2ff5788b&s=${para}`);
    const json = await res.json();
    const responses = json.Search;
    try {


        // ? kalau berhasil

        responses.forEach(data => {
            let datanya =
                ` <div class="card">
            <div class="cardImge">
                <img src="${data.Poster}" alt="" class="w-40" style="aspect-ratio: 10/15;">
            </div>
            <div class="card-body">
                <p class="font-bold py-3">${data.Title}</p>
                <button class=" text-white bg-purple-600 mx-3 px-[20px] py-[7px] rounded-md font-bold">Search</button>
            </div>
        </div>
    </div>`

            datafilm.innerHTML += datanya;
        });

    } catch (error) {
        // ! kalau gagal
        console.info(error);
    }

}


cari.addEventListener('click', function () {
    datafilm.innerHTML = "";
    let tulisan = input.value;
    input.value = "";
    mulai(tulisan);
});