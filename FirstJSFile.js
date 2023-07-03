function msg()
{
    alert('check')
}

function Datatypes()
{
    let a ='123'
    let b = a/NaN
    alert(b)
}

function AlerttheString()
{
    let name ="Ramkumar";
    // alert('hello ${name}');
    alert( `hello ${name}` );
}   

function TestAlertPromptConfirm()
{
    let age = prompt(`Please enter your age`);
    alert( `your age - ${age}` );

    let boss = confirm(`are you the boss`);
    alert(`${boss} I am the boss`);
}

function TypeConversion()
{
    let number = NaN;
    alert(typeof number);
    alert(Number(number));

    let checkbool = "";
    alert(Boolean(checkbool));
}

function UnaryConversion()
{
    let apples = 2;
    let oranges = 3;
    alert(+apples + +oranges);
}

function ConditionalStatements()
{
    let from = "Ann";
  
    showMessage(from, "Hello"); // *Ann*: Hello
    
    // the value of "from" is the same, the function modified a local copy
    alert( from ); // Ann
}

function showMessage(from, text) 
{

    from = '*' + from + '*'; // make "from" look nicer
  
    alert( from + ': ' + text );
  }
  
 