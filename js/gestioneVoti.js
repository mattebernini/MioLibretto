//***   VARIABILI */

function Valutazione(v, c, e, a)
{
    this.voto = v;
    this.cfu = c;
    this.esame = e;
    this.anno = a;
}
var quanti_voti = 0;
var Voti_utente = new Array();
var Voti_simulazione = new Array();

var div_simulazione = document.getElementById("simulazione");
var in_voto_simulazione = document.getElementById("voto_sim");
var in_cfu_simulazione = document.getElementById("cfu_sim");

//***   FUNZIONI PRINCIPALI */

function mostraVoti()
{  
    $.getJSON("../php/get_voti.php", function(voti){
        console.log(voti);
        
        var quanti = 0;
        while(voti[quanti] != undefined)
            quanti++;

        var tabella = document.getElementById("riepilogo_voti");
        for(var i = 0; i<quanti; i+=4)
        {
            Voti_utente[quanti_voti] = new Valutazione(voti[i], voti[i+1], voti[i+2], voti[i+3]);
            Voti_simulazione[quanti_voti] = new Valutazione(voti[i], voti[i+1], voti[i+2], voti[i+3]);
            console.log(Voti_utente[quanti_voti]);

            var riga = document.createElement("tr");
            var esame_td = document.createElement("td");
            esame_td.textContent = Voti_utente[quanti_voti].esame;
            riga.appendChild(esame_td);
            var voto_td = document.createElement("td");
            voto_td.textContent = Voti_utente[quanti_voti].voto;
            riga.appendChild(voto_td);
            var cfu_td = document.createElement("td");
            cfu_td.textContent = Voti_utente[quanti_voti].cfu;
            riga.appendChild(cfu_td);
            var anno_td = document.createElement("td");
            anno_td.textContent = Voti_utente[quanti_voti].anno;
            riga.appendChild(anno_td);
            tabella.appendChild(riga);

            quanti_voti++;
        }
        quanti_voti_salvati = quanti_voti;
        mostraStats();
    });
}

function mostraStats()
{
    var container = document.getElementById("analytics");

    var media = document.createElement("p");
    media.innerHTML = "Media Ponderata: <b>" + mediaPonderata();
    container.appendChild(media);
    console.log(mediaPonderata());

    var loading = document.createElement("p");
    loading.innerHTML = "Laureata/o al <b>" + loading_laurea() + "%</b>";
    container.appendChild(loading);
    console.log(loading_laurea());

    var laurea = document.createElement("p");
    laurea.innerHTML = "Proiezione voto laurea tra <b>" + votoLaurea() + " </b>e <b>" + (votoLaurea()+7) + "</b>";
    container.appendChild(laurea);
    console.log(votoLaurea());

    var mediaPrimoAnno = document.createElement("p");
    mediaPrimoAnno.innerHTML = "Media Primo Anno: <b>" + media_per_anno(1) + "</b>";
    container.appendChild(mediaPrimoAnno);

    var mediaSecondoAnno = document.createElement("p");
    mediaSecondoAnno.innerHTML = "Media Secondo Anno: <b>" + media_per_anno(2) + "</b>";
    container.appendChild(mediaSecondoAnno);

    var mediaTerzoAnno = document.createElement("p");
    mediaTerzoAnno.innerHTML = "Media Terzo Anno: <b>" + media_per_anno(3) + "</b>";
    container.appendChild(mediaTerzoAnno);
}

function addvoto()
{
    if(in_voto_simulazione.value >17 & in_voto_simulazione.value<34)
    {
        Voti_simulazione[quanti_voti] = new Valutazione(in_voto_simulazione.value, in_cfu_simulazione.value, 0, 0);
    }
    quanti_voti++;
    risultato_simulazione()
}

function reset_simulazione()
{
    document.getElementById("div_risultato").remove();
    Voti_simulazione = 0;

    for(var i = 0; i<quanti_voti_salvati; ++i)
    {
        Voti_simulazione[i] = new Valutazione(Voti_utente[i].voti, Voti_utente[i].cfu, Voti_utente[i].esame, Voti_utente[i].anno);
    }
    quanti_voti = quanti_voti_salvati;
    var div_risultato = document.createElement("div");
    div_risultato.id = "div_risultato";
}


//***   FUNZIONI DI UTILITA' */
//      tutte eseguite su Voti_simulazione
function mediaPonderata()
{
    var num = 0;
    var den = 0;

    for(var i = 0; i < quanti_voti; ++i)
    {
        num += Number(Voti_simulazione[i].voto) * Number(Voti_simulazione[i].cfu);
        den += Number(Voti_simulazione[i].cfu);
    }

    return String(num/den);
}
function loading_laurea()
{
    var crediti = 0;
    var anni = document.getElementById("anni_laurea").textContent;
    anni = Number(anni);

    for(var i = 0; i < quanti_voti; ++i)
    {
        crediti += Number(Voti_simulazione[i].cfu);
    }
    
    return Math.floor((crediti/(anni*60))*100);
}
function votoLaurea() 
{
    return parseInt(mediaPonderata()*110/30);
}
function media_per_anno(anno)
{
    var num = 0;
    var den = 0;
    var c = 0;

    for(var i = 0; i < quanti_voti; ++i)
    {
        if(Voti_simulazione[i].anno==anno)
        {
            num += Number(Voti_simulazione[i].voto) * Number(Voti_simulazione[i].cfu);
            den += Number(Voti_simulazione[i].cfu);
            c++;
        }   
    }
    if(c > 0)
        return num/den;
    else
        return "nessun voto";
}

function risultato_simulazione()
{
    document.getElementById("div_risultato").remove();

    var div_risultato = document.createElement("div");
    div_risultato.id = "div_risultato";

    var media = document.createElement("p");
    media.setAttribute("class", "da_cancellare");
    media.innerHTML = "Media Ponderata: <b>" + mediaPonderata();
    div_risultato.appendChild(media);

    var loading = document.createElement("p");
    loading.setAttribute("class", "da_cancellare");
    loading.innerHTML = "Laureata/o al <b>" + loading_laurea() + "%</b>";
    div_risultato.appendChild(loading);

    var laurea = document.createElement("p");
    laurea.setAttribute("class", "da_cancellare");
    laurea.innerHTML = "Proiezione voto laurea tra <b>" + votoLaurea() + " </b>e <b>" + (votoLaurea()+7) + "</b>";
    div_risultato.appendChild(laurea);

    div_simulazione.appendChild(div_risultato);
}