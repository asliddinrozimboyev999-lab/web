 function saralanganlarniBirlashtir(a, b) {
     let i = 0;
     let j = 0;
     let natija = [];
     while (i < a.length && j < b.length) {
         if (a[i] < b[j]) {
             natija.push(a[i]);
             i++;
         } else {
             natija.push(b[j]);
             j++;
         }
     }
     while (i < a.length) {
         natija.push(a[i]);
         i++;
     }
     while (j < b.length) {
         natija.push(b[j]);
         j++;
     }
     return natija;}console.log(saralanganlarniBirlashtir([1, 4, 7], [2, 3, 8]));console.log(saralanganlarniBirlashtir([], [5]));console.log(saralanganlarniBirlashtir([10, 20], [5, 15, 25]));console.log(saralanganlarniBirlashtir([], []));
