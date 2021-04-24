let assert = chai.assert;
describe('Pretraga', function() {
 describe('pretragaPredmet()', function() {
   it('Treba prikazati sve predmete kada se unese prazan string', function() { //Zadatak 2 a
     Pretraga.pretragaPredmet("");
     let tabele = document.getElementsByTagName("table");
     let tabela = tabele[tabele.length-1]
     let redovi = tabela.getElementsByTagName("tr");
     let prikazano=0;
        for(let i=0;i<redovi.length;i++){
            let stil = window.getComputedStyle(redovi[i])
            if(stil.display!=='none') prikazano++;}
     assert.equal(prikazano, 23,"Svi redovi se trebaju prikazani");
   });
   it('Treba prikazati sve predmete koji su matematika', function() { //Zadatak 2 e, dodatni test 1
    Pretraga.pretragaPredmet("matematika");
    let tabele = document.getElementsByTagName("table");
    let tabela = tabele[tabele.length-1]
    let redovi = tabela.getElementsByTagName("tr");
    let prikazano=0;
       for(let i=0;i<redovi.length;i++){
           let stil = window.getComputedStyle(redovi[i])
           if(stil.display!=='none') prikazano++;}
    assert.equal(prikazano, 6,"Svi redovi trebaju biti predmet matematika");
  });
  it('Treba prikazati sve predmete sa opisom Java', function() { //Zadatak 2 e,dodatni test 2
    Pretraga.pretragaPredmet("Java");
    let tabele = document.getElementsByTagName("table");
    let tabela = tabele[tabele.length-1]
    let redovi = tabela.getElementsByTagName("tr");
    let prikazano=0;
       for(let i=0;i<redovi.length;i++){
           let stil = window.getComputedStyle(redovi[i])
           if(stil.display!=='none') prikazano++;}
    assert.equal(prikazano, 6,"Svi redovi trebaju imati opis Java");
  });
   
   
 });
 describe('pretragaNastavnik()', function() {
    it('Ne treba biti prikazan niti jedan predmet kada se unese nepostojeći nastavnik', function() {//zadatak 2 b
      Pretraga.pretragaNastavnik("Mujo");
      let tabele = document.getElementsByTagName("table");
      let tabela = tabele[tabele.length-1]
      let redovi = tabela.getElementsByTagName("tr");
        let prikazano=0;
        for(let i=0;i<redovi.length;i++){
            let stil = window.getComputedStyle(redovi[i])
            if(stil.display!=='none') prikazano++;
        }
      assert.equal(prikazano, 4,"Svi predmeti trebaju biti skriveni.");
    });
    it('Prikazuju se samo predmeti profesora Jurića', function() { //zadatak 2 c
        Pretraga.pretragaNastavnik("Željko Jurić");
        let tabele = document.getElementsByTagName("table");
        let tabela = tabele[tabele.length-1]
        let redovi = tabela.getElementsByTagName("tr");
          let prikazano=0;
          for(let i=0;i<redovi.length;i++){
              let stil = window.getComputedStyle(redovi[i])
              if(stil.display!=='none') prikazano++;
          }
        assert.equal(prikazano, 7,"Željko Jurić treba predavati sve prikazane predmete.");
      });
      it('Prikazuju se samo predmeti profesora pretaženog po prezimenu', function() { //zadatak 2 e, dodatni test 3
        Pretraga.pretragaNastavnik("Okanović");
        let tabele = document.getElementsByTagName("table");
        let tabela = tabele[tabele.length-1]
        let redovi = tabela.getElementsByTagName("tr");
          let prikazano=0;
          for(let i=0;i<redovi.length;i++){
              let stil = window.getComputedStyle(redovi[i])
              if(stil.display!=='none') prikazano++;
          }
        assert.equal(prikazano, 6,"Profesorica Okanović treba predavati sve prikazane predmete.");
      });
  });
  describe('pretragaGodina()', function() {
    it('Prikazuju se samo predmeti druge godine', function() {  //zadatak 2 pod d
    Pretraga.pretragaGodina(2);
    var tabela=document.getElementById("tabela1");
    var red=tabela.getElementsByTagName("tr");
    
        let prikazano=0;
        for(let i=0;i<red.length;i++){
            if(red[i].style.display!=="none") prikazano++;
        }
      assert.equal(prikazano,11,"Trebaju biti prikazani predmeti samo druge godine.");
    });
    it('Prikazuju se svi premeti kada se ukuca broj 4', function() {  //zadatak 2 e, dodatni test 4
        Pretraga.pretragaGodina(4);
        var tabela=document.getElementById("tabela1");
        var red=tabela.getElementsByTagName("tr");
        
            let prikazano=0;
            for(let i=0;i<red.length;i++){
                if(red[i].style.display!=="none") prikazano++;
            }
          assert.equal(prikazano,23,"Trebaju biti prikazani svi predmeti.");
        });
    
  });
});
