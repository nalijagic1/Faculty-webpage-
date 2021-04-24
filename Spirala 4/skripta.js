//Spirala 3 Zadatak 1
function UvecatiSliku(prof){ //funkcija koja, nakon sto se pozove sa parametrom koji je ime id-a slike, poveca njene dimenzije preko čitavog div-a u kojem se nalazi 
   prof.width=173; 
   prof.height=197;
   prof.style.marginTop="0";
}
function Original(prof){ //funkcija koja, nakon sto se pozove sa parametrom koji je ime id-a slike, vraća sliku u originalnu veličinu 
    prof.width=108; 
    prof.height=192;
    prof.style.marginTop="5px";      
}
//Spirala 3 Zadatak 2
function Sort() { //funkcija koja nakon poziva promjeni raspored redova u gridu tako da su poredani po abecedi 
    document.getElementById("FWT").style.gridRow="2/3";
    document.getElementById("MUR1").style.gridRow="3/4";
    document.getElementById("NRS").style.gridRow="4/5";
    document.getElementById("RP").style.gridRow="5/6";
    document.getElementById("RMA").style.gridRow="6/7";
    document.getElementById("UBP").style.gridRow="7/8";
    document.getElementById("UUP").style.gridRow="8/9";
}
//Spirala 3 Zadatak 3
function godine(god){ //funkcija koja nakon poziva, prikazuje sve predmete ili samo predmete prve ili druge godine, zavisno od parametra
    for(var i=0; i<document.getElementsByClassName("G2").length; i++){
        for (var j=0; j<document.getElementsByClassName("G1").length; j++){
            switch(god){
                case 1: //ukoliko je parametar 1, prikazuju se samo predmeti prve godine
                    document.getElementsByClassName("G2")[i].style.display="none";
                    document.getElementsByClassName("G1")[j].style.display="block";
                    break;
                case 2: //ukoliko je parametar 2, prikazuju se samo predmeti druge godine
                    document.getElementsByClassName("G2")[i].style.display="block";
                    document.getElementsByClassName("G1")[j].style.display="none";
                    break;
                case 3: // ukoliko je parametar 3, prikazuu se svi predmeti
                    document.getElementsByClassName("G2")[i].style.display="block";
                    document.getElementsByClassName("G1")[j].style.display="block";
                    break;
            }
        }
    }
}
//Spirala 3 Zadatak 4
function zuto(prof){ // funkcija koja nakon poziva oboji redove sa istim profesorom u žuto na osnovu njihove klase i parametra
    switch(prof){
        case 1: // redovi sa klasom juric ce postati zuti
    for(var i=0;i<document.getElementsByClassName("juric").length;i++){
        document.getElementsByClassName("juric")[i].style.backgroundColor="yellow";
        document.getElementsByClassName("juric")[i].style.color="black";
    }break;
    case 2: // redovi sa klasom anel ce postati zuti
        for(var i=0;i<document.getElementsByClassName("anel").length;i++){
            document.getElementsByClassName("anel")[i].style.backgroundColor="yellow";
            document.getElementsByClassName("anel")[i].style.color="black";
        }break;
    case 3: //redovi sa klasom amila ce postati zuti
        for(var i=0;i<document.getElementsByClassName("amila").length;i++){
            document.getElementsByClassName("amila")[i].style.backgroundColor="yellow";
            document.getElementsByClassName("amila")[i].style.color="black";
        }break;
    case 4: //redovi sa klasom buza ce postati zuti
        for(var i=0;i<document.getElementsByClassName("buza").length;i++){
            document.getElementsByClassName("buza")[i].style.backgroundColor="yellow";
            document.getElementsByClassName("buza")[i].style.color="black";
        }break;
    case 5: //redovi sa klasom vedran ce postati zuti
        for(var i=0;i<document.getElementsByClassName("vedran").length;i++){
            document.getElementsByClassName("vedran")[i].style.backgroundColor="yellow";
            document.getElementsByClassName("vedran")[i].style.color="black";
        }break;  
    case 6: //redovi sa klasom samir ce postati zuti
        for(var i=0;i<document.getElementsByClassName("samir").length;i++){
            document.getElementsByClassName("samir")[i].style.backgroundColor="yellow";
            document.getElementsByClassName("samir")[i].style.color="black";
        }break; 
    case 7: //redovi sa klasom vensada ce postati zuti
        for(var i=0;i<document.getElementsByClassName("vensada").length;i++){
            document.getElementsByClassName("vensada")[i].style.backgroundColor="yellow";
            document.getElementsByClassName("vensada")[i].style.color="black";
        }break; 
    case 8: //redovi sa klasom dzenana ce postati zuti
        for(var i=0;i<document.getElementsByClassName("dzenana").length;i++){
            document.getElementsByClassName("dzenana")[i].style.backgroundColor="yellow";
            document.getElementsByClassName("dzenana")[i].style.color="black";
        }break; 
    case 9: //redovi sa klasom dusanka ce postati zuti
        for(var i=0;i<document.getElementsByClassName("dusanka").length;i++){
            document.getElementsByClassName("dusanka")[i].style.backgroundColor="yellow";
            document.getElementsByClassName("dusanka")[i].style.color="black";
        }break; 
    case 10: //redovi sa klasom ingmar ce postati zuti
        for(var i=0;i<document.getElementsByClassName("ingmar").length;i++){
            document.getElementsByClassName("ingmar")[i].style.backgroundColor="yellow";
            document.getElementsByClassName("ingmar")[i].style.color="black";
        }break; 
    }
}
function normalno(nor){ //funkcija koja nakon poziva vraća originalnu pozadinu redovima
    switch(nor){
        case 1: //redovi sa klasom juric ce se vratiti u originalnu boju
            for(var i=0;i<document.getElementsByClassName("juric").length;i++){
                document.getElementsByClassName("juric")[i].style.backgroundColor="rgb(0,0,204,0.3)";
                document.getElementsByClassName("juric")[i].style.color="white";
            }break;
    case 2: //redovi sa klasom anel ce se vratiti u originalnu boju
        for(var i=0;i<document.getElementsByClassName("anel").length;i++){
            document.getElementsByClassName("anel")[i].style.backgroundColor="rgb(0,0,204,0.3)";
            document.getElementsByClassName("anel")[i].style.color="white";
        }break;
    case 3: //redovi sa klasom amila ce se vratiti u originalnu boju
        for(var i=0;i<document.getElementsByClassName("amila").length;i++){
            document.getElementsByClassName("amila")[i].style.backgroundColor="rgb(0,0,204,0.3)";
            document.getElementsByClassName("amila")[i].style.color="white";
        }break;
    case 4: //redovi sa klasom buza ce se vratiti u originalnu boju
        for(var i=0;i<document.getElementsByClassName("buza").length;i++){
            document.getElementsByClassName("buza")[i].style.backgroundColor="rgb(0,0,204,0.3)";
            document.getElementsByClassName("buza")[i].style.color="white";
        }break;
    case 5: //redovi sa klasom vedran ce se vratiti u originalnu boju
        for(var i=0;i<document.getElementsByClassName("vedran").length;i++){
            document.getElementsByClassName("vedran")[i].style.backgroundColor="rgb(0,0,204,0.3)";
            document.getElementsByClassName("vedran")[i].style.color="white";
        }break;
    case 6: //redovi sa klasom samir ce se vratiti u originalnu boju
        for(var i=0;i<document.getElementsByClassName("samir").length;i++){
            document.getElementsByClassName("samir")[i].style.backgroundColor="rgb(0,0,204,0.3)";
            document.getElementsByClassName("samir")[i].style.color="white";
        }break;
    case 7: //redovi sa klasom vensada ce se vratiti u originalnu boju
        for(var i=0;i<document.getElementsByClassName("vensada").length;i++){
            document.getElementsByClassName("vensada")[i].style.backgroundColor="rgb(0,0,204,0.3)";
            document.getElementsByClassName("vensada")[i].style.color="white";
        }break;
    case 8: //redovi sa klasom dzenana ce se vratiti u originalnu boju
        for(var i=0;i<document.getElementsByClassName("dzenana").length;i++){
            document.getElementsByClassName("dzenana")[i].style.backgroundColor="rgb(0,0,204,0.3)";
            document.getElementsByClassName("dzenana")[i].style.color="white";
        }break;  
    case 9: //redovi sa klasom dusanka ce se vratiti u originalnu boju
        for(var i=0;i<document.getElementsByClassName("dusanka").length;i++){
            document.getElementsByClassName("dusanka")[i].style.backgroundColor="rgb(0,0,204,0.3)";
            document.getElementsByClassName("dusanka")[i].style.color="white";
        }break;
    case 10: //redovi sa klasom ingmar ce se vratiti u originalnu boju
        for(var i=0;i<document.getElementsByClassName("ingmar").length;i++){
            document.getElementsByClassName("ingmar")[i].style.backgroundColor="rgb(0,0,204,0.3)";
            document.getElementsByClassName("ingmar")[i].style.color="white";
        }break;  
    }
}