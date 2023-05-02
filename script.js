let button=document.getElementsByClassName('btn');

for(let i=0;i<button.length;i++)
{
    button[i].addEventListener('click', (e)=>
    {
        switch(e.target.innerHTML)
        {
            case '=':
     document.getElementById('disp').innerHTML=eval(document.getElementById('disp').innerHTML);
                break;
            case 'AC':
                document.getElementById('disp').innerHTML=0;
               break;
               case 'X':
                document.getElementById('disp').innerHTML= document.getElementById('disp').innerHTML.substring(0,document.getElementById('disp').innerHTML.length-1);
                 break;
                 default:
            document.getElementById('disp').innerHTML=document.getElementById('disp').innerHTML+e.target.innerHTML;
        }

        document.getElementById('disp').innerHTML=k;
       // document.getElementById('disp').style.fontSize=5px;
    })
}