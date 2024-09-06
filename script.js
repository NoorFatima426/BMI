const form= document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    if(height===''|| height<0 || isNaN(height)){
        results.innerHTML=`Please  enter valid height <br> you have entered  ${height}`;
    }
    else    if(weight===''|| weight<0 || isNaN(weight)){
        results.innerHTML=`Please  enter valid weight <br> you have entered ${weight}`;
    }
    else{
        const bmi=(weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = ` <span>Results: ${bmi} </span>`;
        remarks_data(bmi);
    }
});
function remarks_data(bmi){
    let remarks=document.querySelector('#remarks');
    if(bmi<18.6){
        remarks.innerHTML=`You are underweight`;
            }
            else if(bmi>=18.6 && bmi<=24.9)
            {
                remarks.innerHTML=`Normal Range`;
            }
            else{
                remarks.innerHTML=`You are Overweight`;
            }
}
function reset(){
    document.querySelector('#height').value='';
    document.querySelector('#weight').value='';
document.querySelector('#results').innerHTML='';
document.querySelector('#remarks').innerHTML='';
}
