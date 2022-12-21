 const student = "Людский Артемий "; 
 // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1)) + min;
 }
  function throwRandomError(errorRate) {
 
   if (getRandomIntInclusive(0 , 100) <= errorRate) {
      throw new Error('Ой, что-то сломалось');
}
}
const errorRate = 0.2;

try 
{
  throwRandomError(errorRate) ;
  
  alert('насяльника оно работать, я сделать ');
  
  } 
  catch (err) 
  {
 alert ('насяльника я клац клац, оно бум бум и сломаца');
  console.log(err);
  }