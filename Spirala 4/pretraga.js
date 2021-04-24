let Pretraga = (function(){
      let pretragaPredmet=function(nazivPredmeta){//funkcija za pretragu opisa i predmeta
           var input, filter, table, tr, td,td2, i, txtValue,txtValue2;
          table = document.getElementById("tabela1");
          tr = table.getElementsByTagName("tr");
          input = nazivPredmeta;//uzima unesenu vrijednost
          
          if(input==""){   //ukoliko je prazan string, sve treba da bude prikazano
               for (i = 0; i < tr.length; i++)
                    tr[i].style.display = "";
          }else{
          filter = input.toUpperCase();//input prestaje biti case sensitive
         
          for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
               td2 = tr[i].getElementsByTagName("td")[1];
               if (td || td2) {
                 txtValue = td.textContent || td.innerText;//vrijednost u redu i koloni 1(naziv)
                 txtValue2 = td2.textContent || td2.innerText;//vrijednost u redu i koloni 2(opis)
                if ((txtValue.toUpperCase().indexOf(filter) > -1) || (txtValue2.toUpperCase().indexOf(filter) > -1)) {
                     tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
                
             } 
     }}
}

let pretragaNastavnik =function(imeNastavnika){
     var  filter, table, tr, td, i, txtValue;
     table = document.getElementById("tabela1");
    tr = table.getElementsByTagName("tr")
     var profesor=imeNastavnika;//uzima vrijednost unosa
     if(profesor==""){//ukoliko je unos prazan string, sve se treba prikazati
          for (i = 0; i < tr.length; i++)
               tr[i].style.display = "";
     }else{
     filter = profesor.toUpperCase();//unos prestaje biti case sensitive
    for (i = 0; i < tr.length; i++) {
         td = tr[i].getElementsByTagName("td")[2];//gleda sve redove u koloni 3 tj koloni profesor
            if (td) {
                 txtValue = td.textContent || td.innerText;//uzima vrijednost reda i kolone 3
                if (txtValue.toUpperCase().indexOf(filter) > -1) {//ukoliko pronađe input vrijednost, treba prikazati taj red, u suprotnom ga sakriti
                     tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
}
}
}
}
let pretragaGodina=function(godina){
     var tabela=document.getElementById("tabela1");
     var red=tabela.getElementsByTagName("tr")
     var god=godina;
     if(god==2){ //ukoliko je input 2 sakriti redove prve godine
          for(var i=0;i<12;i++)
               red[i].style.display="none";
          for(var i=12;i<23;i++)
               red[i].style.display="";
     }else if(god==1){// ukoliko je input 1 sakriti redove druge godine
          for(var i=0;i<12;i++)
               red[i].style.display="";
          for(var i=12;i<23;i++)
               red[i].style.display="none";
     }else{ //ukoliko je bilo koji drugi unos, prikazati sve redove
          for(var i=0;i<23;i++)
               red[i].style.display="";
     }}

return {pretragaPredmet: pretragaPredmet,pretragaNastavnik: pretragaNastavnik,pretragaGodina:pretragaGodina}})()

