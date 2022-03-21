
  $(function(){

    
$(document).ready(function(){
  $("#cakeChoice").hide();

});

$(document).ready(function(){
  $("#cakeChoice2").hide();

});
  
  document.querySelector('#orderCake').addEventListener('change', () => { 
    const select_value = document.querySelector('#orderCake').value
    if (select_value === "yes") {
      document.querySelector('#cakeChoice').style.display = "block"
    } else {
      document.querySelector('#cakeChoice').style.display = "none"
    }
  })

  document.querySelector('#orderCake').addEventListener('change', () => { 
    const select_value = document.querySelector('#orderCake').value
    if (select_value === "yes") {
      document.querySelector('#cakeChoice2').style.display = "block"
    } else {
      document.querySelector('#cakeChoice2').style.display = "none"
    }
  })

}); 

