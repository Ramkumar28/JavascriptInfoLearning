function msg()
{
    let admin,name='John'
    let firstname = 'Ram'
    let newTry = 'Ram ${firstname}'
    alert('newTry')
}

function Learning()
{
    let fruit = prompt('Enter the fruit to you want to buy','apple');
    let bag = {};
    bag[fruit] = 10;
    alert(bag[fruit]);

}
function ObjectTask()
{
    let user ={};
    user['name'] ='John';
    user['syrname'] = 'Smith';
    user['name'] = 'Pete';
    delete user.name;
}

function ObjectTask1()
{
    let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
}

function isEmpty(obj)
{
for(let key in obj)
{
return false;
}
return true;
}

function SumSalaries()
{
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }


    let sum = 0;
    for(let salary in salaries)
    {
        sum = sum + salary;
    }
    alert(salary);
}

function declarationOfObject()
{
    let menu =
    {
        width : 200,
        innerHeight : 300,
        tile : 'My Menu'
    };
    multiplyNumeric(menu);
}

function multiplyNumeric(menu)
{
    for(let key in menu)
    {
        if(typeof key == 'number')
        {
            menu[key] = 2* menu[key];
        }
    }
}