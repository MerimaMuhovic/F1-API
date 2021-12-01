
const searchBtn = document.getElementById('search-btn');
const conList = document.getElementById('constructors');


// event listeners
searchBtn.addEventListener('click', getConstructorsList);

function getConstructorsList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    
    fetch(`http://ergast.com/api/f1/${searchInputTxt}/constructors.json`)
    .then(response => response.json())
    .then(data => {
        let html = "";

        let responseData = data?.MRData?.ConstructorTable?.Constructors
        let season = data?.MRData?.ConstructorTable?.season

        if(responseData){
            responseData.forEach(constructor => { 
                html += `
                    <div class="con-item" data-id="${season}"
                    <div class="con-name">
                        <h3>${constructor.name}</h3>

                        <h3>${constructor.nationality}</h3>  
                        
                        <div class = "about-btn">
                            <a href = "${constructor.url}" target = "_blank">More about</a>
                          </div>

                    </div>

                </div>
                `;
            });
            conList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any constructors!";
            conList.classList.add('notFound');
        }

        conList.innerHTML = html;

        
        
    });

    

}
