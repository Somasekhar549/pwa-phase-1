function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4  && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);

}
getfile("dynamic.json",function (text) {
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basic);
  career(data.career);
  education(data.education);
  skills(data.skills);

})
var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function  profile(pro) {

var image=document.createElement('img');
image.src=pro.img;
left.appendChild(image);
main.appendChild(left);
var head=document.createElement('h2');
head.textContent=pro.name;
left.append(head);
var hr=document.createElement('h2');
left.append(hr);
var head1=document.createElement('h2');
head1.textContent=pro.gmail;
left.append(head1);




}
function career(c){
  var rh=document.createElement("h1");
  rh.textContent="resume builder";
  right.append(rh);
  var hh=document.createElement("h2");
  right.append(hh);
}
function education(edu){
  var h2=document.createElement('h2');
  h2.textContent="Educational details";
  right.append(h2);
  var hr=document.createElement('hr');
  right.append(hr);
  var table=document.createElement('table');
  let row='';
  row += "<tr>"+"<th>"+"sno" +"</th>"+
         "<th>"+"degree" +"</th>"+
         "<th>"+"institute" +"</th>"+
         "<th>"+"percentage"+"</th>"+
         "/tr>";
  for(i in edu){
    row += "<tr>"+"<td>"+edu[i].sno +"</td>"+
    "<td>"+edu[i].degree +"</td>"+
    "<td>"+edu[i].institute +"</td>"+
    "<td>"+edu[i].per +"</td>"+
    "</tr>";
  }
  table.innerHTML=row;
  right.append(table);
  main.append(right);

}
function skills(l) {
  var s=document.createElement("h1");
  s.textContent="skills set";
  right.append(s);
  var ul=document.createElement(ul);
  right.append(ul);
  for (i in l){
    var li=document.createElement("li");
    li.textContent=l[i].info;
    ul.append(li);

  }
  }
