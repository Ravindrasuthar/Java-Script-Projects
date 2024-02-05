const datapresent = localStorage.getItem("user-Info");

if(datapresent)
{
    const mydata = JSON.parse(datapresent);
    document.getElementById("fname").value = mydata.f_name;
    document.getElementById("lname").value=mydata.l_name;
    document.getElementById("country").value=mydata._country;
    document.getElementById("pno").value=mydata._pno;
    document.getElementById("state").value=mydata._state;
    document.getElementById("city").value=mydata._city;
    document.getElementById("village").value=mydata._village;
}
else
{
    storedata()
}

function storedata(){
    const f_name = prompt("Enter your first name:");
    const l_name = prompt("Enter your last name:");
    const _country = prompt("Enter your country:");
    const _pno = prompt("Enter your phone number:");
    const _state = prompt("Enter your state:");
    const _city = prompt("Enter your city:");
    const _village = prompt("Enter your village:");

    const userInfo={
          f_name,
          l_name,
          _country,
          _pno,
          _state,
          _city,
          _village,
    };

    localStorage.setItem("user-Info",JSON.stringify(userInfo));

    document.getElementById("fname").value = userInfo.f_name;
    document.getElementById("lname").value=userInfo.l_name;
    document.getElementById("country").value=userInfo._country;
    document.getElementById("pno").value=userInfo._pno;
    document.getElementById("state").value=userInfo._state;
    document.getElementById("city").value=userInfo._city;
    document.getElementById("village").value=userInfo._village;
}

