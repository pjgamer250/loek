const data = [

{
type:"folder",
name:"📁 Lokesh Kanakaraj Movies",
birthday:"🎂 Birthday: 14 March 1986",
movies:[
"Maanagaram (2017)",
"Kaithi (2019)",
"Master (2021)",
"Vikram (2022)",
"Leo (2023)"
]
},

{
type:"folder",
name:"🔥 Vijay Movies",
birthday:"🎂 Birthday: 22 June 1974",
movies:[
"Naalaiya Theerpu (1992)",
"Sendhoorapandi (1993)",
"Rasigan (1994)",
"Love Today (1997)",
"Kadhalukku Mariyadhai (1997)",
"Kushi (2000)",
"Friends (2001)",
"Ghilli (2004)",
"Pokiri (2007)",
"Thuppakki (2012)",
"Kaththi (2014)",
"Theri (2016)",
"Mersal (2017)",
"Sarkar (2018)",
"Bigil (2019)",
"Master (2021)",
"Beast (2022)",
"Varisu (2023)",
"Leo (2023)"
]
},

{
type:"folder",
name:"☀️ Surya Movies",
birthday:"🎂 Birthday: 23 July 1975",
movies:[
"Nerukku Ner (1997)",
"Nandha (2001)",
"Kaakha Kaakha (2003)",
"Pithamagan (2003)",
"Ghajini (2005)",
"Aaru (2005)",
"Vel (2007)",
"Vaaranam Aayiram (2008)",
"Ayan (2009)",
"Singam (2010)",
"7aum Arivu (2011)",
"24 (2016)",
"NGK (2019)",
"Soorarai Pottru (2020)",
"Jai Bhim (2021)",
"Kanguva (2024)"
]
},

{
type:"folder",
name:"🎭 Vijay Sethupathi Movies",
birthday:"🎂 Birthday: 16 January 1978",
movies:[
"Pizza (2012)",
"Soodhu Kavvum (2013)",
"Orange Mittai (2015)",
"Sethupathi (2016)",
"Vikram Vedha (2017)",
"96 (2018)",
"Super Deluxe (2019)",
"Petta (2019)",
"Master (2021)",
"Vikram (2022)",
"Jawan (2023)",
"Maharaja (2024)"
]
},

{
type:"folder",
name:"🎬 Kamal Hassan Movies",
birthday:"🎂 Birthday: 7 November 1954",
movies:[
"Kalathur Kannamma (1960)",
"Apoorva Raagangal (1975)",
"Moondram Pirai (1982)",
"Nayakan (1987)",
"Thevar Magan (1992)",
"Indian (1996)",
"Hey Ram (2000)",
"Virumaandi (2004)",
"Dasavathaaram (2008)",
"Vishwaroopam (2013)",
"Papanasam (2015)",
"Vikram (2022)",
"Indian 2 (2024)"
]
},


{
type:"movie",
name:"Kaavalan",
category:"Love Cutz",
link:"https://drive.google.com/drive/folders/1Yf8rN8B7zPwpdrxz5QIztCWrZUtVzVnK"
},

{
type:"movie",
name:"LEO",
category:"Love Cutz",
link:"https://drive.google.com/drive/folders/1lFACzy425BYpgr48colcJlk7elVXKhdL"
},

{
type:"movie",
name:"LEO",
category:"Mass Cutz",
link:"https://drive.google.com/drive/folders/1r62dBbc3T7GBXnaWv9GTGbM9Pz4bx61T"
},

{
type:"movie",
name:"Master",
category:"Love",
link:"https://drive.google.com/drive/folders/1rjYj-Ytz55HQJXpqFG_XOkvy-Y6mp0XD"
},

{
type:"movie",
name:"Master",
category:"Mass",
link:"https://drive.google.com/drive/folders/1y8eAECVfV6olk9k53yjHsYWzlnbYd-TC"
}

];


const content = document.getElementById("content");


function show(list){

content.innerHTML="";


if(list.length===0){

content.innerHTML=`
<div class="card">
<h2>NOT FOUND</h2>
<p>COMING SOON 🚀</p>
</div>`;

return;

}


list.forEach(item=>{


if(item.type==="folder"){

content.innerHTML+=`

<div class="card" onclick="openFolder('${item.name}')">

<h2>${item.name}</h2>

</div>

`;

}

else{


content.innerHTML+=`

<div class="card">

<h2>🎬 ${item.name}</h2>

<div class="category">
🏷 ${item.category}
</div>

<button onclick="openLink('${item.link}')">
CLICK HERE
</button>

</div>

`;

}


});


}



function openFolder(name){


let folder=data.find(x=>x.name===name);


content.innerHTML=`

<div class="card">

<h2>${folder.name}</h2>

<h3>${folder.birthday}</h3>

<br>

${folder.movies.map(movie=>`

<p>🎬 ${movie}</p>

`).join("")}


<br>

<button onclick="show(data)">
BACK
</button>


</div>

`;

}




function openLink(link){

window.open(link,"_blank");

}




document.getElementById("search").addEventListener("input",(e)=>{


let value=e.target.value.toLowerCase();


show(
data.filter(x=>

JSON.stringify(x)
.toLowerCase()
.includes(value)

)
);


});





function instagram(){

window.open(
"https://www.instagram.com/_loek.universal_",
"_blank"
);

}



function whatsapp(){

window.open(
"https://chat.whatsapp.com/CWHp5pMfQZxJwRXPmKC3dO",
"_blank"
);

}




window.addEventListener("load",()=>{


setTimeout(()=>{

document.getElementById("loader").style.display="none";

document.querySelector(".app").style.display="block";


show(data);


},1500);


});