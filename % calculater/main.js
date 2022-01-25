
const btn = document.getElementById("btn");

const process = ()=>{
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");
  let input4 = document.getElementById("input4");
  let close_btn = document.getElementById("close_btn");
  

  var numbers = /^[0-9]+$/;
  
  if(input1.value.match(numbers) && input2.value.match(numbers) && input3.value.match(numbers) && input4.value.match(numbers))
  {
      let result_pera = document.getElementById("result_pera");
      let result_div = document.getElementById("result");

      result_div.style.display="none";
      
      let in1 = parseInt(input1.value);
      let in2 = parseInt(input2.value);
      let in3 = parseInt(input3.value);
      let in4 = parseInt(input4.value);
      

      let sum = in1 + in2 + in3 + in4;
      
      let persentage = sum/4;

      console.log(persentage);

      if(persentage <= 30)
      {
        //alert(`sorry your fail your persentage is ${persentage}%`);
        result_div.style.display= "flex";
        result_pera.innerHTML = `sorry your fail your persentage is ${persentage}%`;
      }
      else if(persentage > 30 && persentage <=50)
      {
        //alert(`Good your Pass your persentage is ${persentage}% you got C Grade`);
        result_div.style.display= "flex";
        result_pera.innerHTML = `Good your Pass your persentage is ${persentage}% you got C Grade`;
      } 
      else if(persentage > 51 && persentage <=80)
      {
        //alert(`Good your Pass your persentage is ${persentage}% you got B Grade`);
        result_div.style.display= "flex";
        result_pera.innerHTML = `Good your Pass your persentage is ${persentage}% you got B Grade`;
      }
      else if(persentage > 81 && persentage <=100)
      {
       // alert(`Very Good your Pass your persentage is ${persentage}% you got A Grade`);
        result_div.style.display= "flex";
        result_pera.innerHTML = `Very Good your Pass your persentage is ${persentage}% you got A Grade`;
      }


     

  }
  else
  {
    document.getElementById("result").style.display= "flex";
    document.getElementById("result_pera").innerHTML = `please enter vaild number only`;
  }
}

const close = ()=>{
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";
  document.getElementById("result_pera").innerHTML = "";

  let result_div = document.getElementById("result");

  result_div.style.display="none";
  

}

close_btn.addEventListener('click',close);
btn.addEventListener('click',process);