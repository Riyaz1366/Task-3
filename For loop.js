let Personaldata ={
    
    "Name"          : "Riyaz Mohideen",
    "MOBILE NO"     : "9677288962",
    "ADDRESS"       : "NO.15, Anna Salai Periyar Nagar Alwarthirunagar, CHENNAI-600087",
    "EMAIL ID"      : "mohammedriyaz337@gmail.com",
    "Father Name"   : "Mohammed Auyb ",
    "Mother Name"   : "Mehar Nisha ",
    "Date of Birth" : "16th Apr 1995  ",
    "GENDER"        : "MALE",
} 

let keys = Object.Keys(Personaldata);

for ( let i=0; i<keys.length; i++)
{

   console.log(i + ":" +  Personaldata[i]);
}