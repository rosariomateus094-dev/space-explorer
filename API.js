//import dados from './logicaAPI.js';




     // hamburguer
const hamburguer = document.getElementById('hamburguer');

const ham1 = document.getElementById('ham1');
const ham2 = document.getElementById('ham2');
const ham3 = document.getElementById('ham3');

const slide = document.getElementById('sl');
const slide2 = document.getElementById('sl2');




hamburguer.addEventListener('click', () =>{

    ham1.classList.toggle('ham1');
    ham2.classList.toggle('ham2');
    ham3.classList.toggle('ham3');
    slide.classList.toggle('slide');
    slide2.classList.toggle('slide');
    
})


                 
               //promisse
 async function dados(){

    try{

        const resposta = await fetch('https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=DEMO_KEY"');

        if(!resposta.ok){

            throw new Error('há algum problema');
        }


        const info =await resposta.json();

        console.log(info[1]);
        
                //lógica cards

                  
                //card1
          const card1 = document.getElementById('card1');

          card1.href = info[1].url;

         const img1 = document.getElementById('img1');

         img1.src = info[1].hdurl;

         const texto1 = document.getElementById('texto1').innerHTML=info[1].title;

          
              //card2

              const card2 = document.getElementById('card2');

          card2.href = info[2].url;

         const img2 = document.getElementById('img2');

         img2.src = info[2].hdurl;

         const texto2 = document.getElementById('texto2').innerHTML=info[2].title;


            // card3

            const card3 = document.getElementById('card3');

          card3.href = info[3].url;

         const img3 = document.getElementById('img3');

         img3.src = info[3].hdurl;

         const texto3 = document.getElementById('texto3').innerHTML=info[3].title;


           //card4

            const card4 = document.getElementById('card4');

          card4.href = info[4].url;

         const img4 = document.getElementById('img4');

         img4.src = info[4].hdurl;

         const texto4 = document.getElementById('texto4').innerHTML=info[4].title;

         
        


    } catch(erro){

        console.error(`o erro é o seguinte ${erro}`);
    }
}


















