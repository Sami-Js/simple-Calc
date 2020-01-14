

const btns = document.querySelectorAll('button'),
      inputVal = document.querySelector('#show-input'),
      inputClear = document.querySelector('.fa-arrow-left');
      



      btns.forEach((e) => e.addEventListener('click' , checked));

 // value boolen because stop clicked 
      let bool = true ;

      function checked() {
        if(!bool) return ;
        numberScaler(this);

        // slice number and symbol ==> this is NaN 
        let val = this.innerHTML.slice( 0 , 1);
        
        switch(val){
          case 'C':
          inputVal.value = '';
          break ;
          case '=':
          inputVal.value = eval(inputVal.value);
          break ;
          default:
          inputVal.value += val ; 
        }
          
        }
      
    
    // func to click for arrow icon clear value
    inputClear.onclick = function (){ inputVal.value = '';}





    // method create number scaler and remove 
      function numberScaler(item) {
          bool = false ;
          let span = document.createElement('span');
          // inner item create inner tag the number same this clicked 
          span.innerHTML = item.innerHTML ;
          item.appendChild(span);
          span.className = 'scaler';
          setTimeout(() => {
          span.remove();
          bool = true ;
          } , 200 );
      }  

