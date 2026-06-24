const data = [

{
type:"folder",
name:"📁 Lokesh Kanakaraj Movies",
birthday:"🎂 14 March 1986",
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
name:"☀️ Surya Movies",
birthday:"🎂 23 July 1975",
movies:[
"Nerukku Ner (1997)",
"Kaadhale Nimmadhi (1998)",
"Sandhippoma (1998)",
"Periyanna (1999)",
"Uyirile Kalanthathu (2000)",
"Nandha (2001)",
"Unnai Ninaithu (2002)",
"Kaakha Kaakha (2003)",
"Pithamagan (2003)",
"Perazhagan (2004)",
"Aaytha Ezhuthu (2004)",
"Ghajini (2005)",
"Aaru (2005)",
"Sillunu Oru Kadhal (2006)",
"Vel (2007)",
"Vaaranam Aayiram (2008)",
"Ayan (2009)",
"Aadhavan (2009)",
"Singam (2010)",
"7aum Arivu (2011)",
"Maattrraan (2012)",
"Singam 2 (2013)",
"Anjaan (2014)",
"24 (2016)",
"NGK (2019)",
"Soorarai Pottru (2020)",
"Jai Bhim (2021)",
"Etharkkum Thunindhavan (2022)",
"Kanguva (2024)"
]
},


{
type:"folder",
name:"🎭 Vijay Sethupathi Movies",
birthday:"🎂 16 January 1978",
movies:[
"Thenmerku Paruvakaatru (2010)",
"Pizza (2012)",
"Naduvula Konjam Pakkatha Kaanom (2012)",
"Soodhu Kavvum (2013)",
"Orange Mittai (2015)",
"Sethupathi (2016)",
"Vikram Vedha (2017)",
"96 (2018)",
"Super Deluxe (2019)",
"Petta (2019)",
"Master (2021)",
"Kaathuvaakula Rendu Kaadhal (2022)",
"Vikram (2022)",
"Jawan (2023)",
"Maharaja (2024)"
]
},


{
type:"folder",
name:"🎬 Kamal Hassan Movies",
birthday:"🎂 7 November 1954",
movies:[
"Kalathur Kannamma (1960)",
"Apoorva Raagangal (1975)",
"16 Vayathinile (1977)",
"Sigappu Rojakkal (1978)",
"Moondram Pirai (1982)",
"Nayakan (1987)",
"Sathyaa (1988)",
"Apoorva Sagodharargal (1989)",
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


const content=document.getElementById("content");


function show(list){


content.innerHTML="";


if(list.length==0){

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

<div class="card folder"
onclick="openFolder('${item.name}')">

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


let folder=data.find(x=>x.name==name);


content.innerHTML=`

<div class="card">

<h2>${folder.name}</h2>

<h3>${folder.birthday}</h3>

<br>

${folder.movies.map(m=>`

<p>🎬 ${m}</p>

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



document.getElementById("search").oninput=(e)=>{


let text=e.target.value.toLowerCase();


show(

data.filter(x=>

JSON.stringify(x)
.toLowerCase()
.includes(text)

)

);


};
