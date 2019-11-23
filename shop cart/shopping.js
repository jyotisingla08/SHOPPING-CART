
	var i=0;
	var products=[];
	var cartt=[];
	var panellink=document.getElementById("panellink");
	var ge=JSON.parse(localStorage.getItem("product"));
	for(j=0;j<ge.length;j++)
	{
		var o=new Object();
		o.id=ge[j].id;
		i=ge[j].id;
		o.name=ge[j].name;
		o.price=ge[j].price;
		o.qty=ge[j].qty;
		products.push(o);
		adom(o);
		i++;
	}

	function break1()
	{
        var a = document.getElementById("a1");
        var b = document.createElement("br");
        a.appendChild(b);
	}
	function unHideAddNewProductLink()
{
   panellink.setAttribute("style","visibility:visible");
}
function editproduct(t)
{
	//break1();
	//break1();
	var a=document.getElementById("a1");
	var p=document.createElement("p");
	var w=document.createElement("div");
    var txt=document.createTextNode("EDIT PRODUCT");
    p.appendChild(txt);
    a.append(p);
	var a=document.getElementById("a1");
	var b=document.createElement("input");
	b.setAttribute("type","text");
	b.setAttribute("placeholder","enter product name");
	b.setAttribute("id","id11");
	b.setAttribute("style","width:1000px;height:25px");
	a.appendChild(b);
    break1();
    break1();
	var a=document.getElementById("a1");
	var b=document.createElement("textarea");
	b.setAttribute("type","text");
	b.setAttribute("placeholder","enter the product description");
	b.setAttribute("id","id22");
	b.setAttribute("style","width:1000px;height:50px");
	a.appendChild(b);
    break1();
    break1();
	var a=document.getElementById("a1");
	var b=document.createElement("input");
	b.setAttribute("type","text");
	b.setAttribute("placeholder","enter product price");
	b.setAttribute("id","id33");
	b.setAttribute("style","width:1000px;height:25px");
	a.appendChild(b);
    break1();
    break1();
	var a=document.getElementById("a1");
	var b=document.createElement("input");
	b.setAttribute("type","text");
	b.setAttribute("placeholder","enter the product quantity");
	b.setAttribute("id","id44");
	b.setAttribute("style","width:1000px;height:25px");
	a.appendChild(b);
    break1();
    break1();
var a=document.getElementById("a1");
	var b=document.createElement("button");
	var c=document.createTextNode("edit button");
	b.appendChild(c);
	b.setAttribute("id","id55");
	b.setAttribute("style","width:100px;height:25px");
	a.appendChild(b);
	b.addEventListener("click",function(){
     var divv=document.createElement("div");
     divv.setAttribute("id",t.id);
		var b=document.getElementById("a3");

		var c=document.getElementById("id11").value;
		var d=document.getElementById("id22").value;
		var m=document.getElementById("id33").value;
		var n=document.getElementById("id44").value;
		var c1=document.createTextNode("PRODUCT NAME:- "+c+"  ");
		var d1=document.createTextNode("PRODUCT DESC:- "+d+"  ");
		var m1=document.createTextNode("PRODUCT PRICE:- "+m+"  ");
		var n1=document.createTextNode("PRODUCT QTY:- "+n+"  ");
		divv.appendChild(c1);
		divv.appendChild(d1);
		divv.appendChild(m1);
		divv.appendChild(n1);
		b.replaceChild(divv,t);
		console.log(t.id);
		var x=findindex(t.id);
		products[x].name=c;
		products[x].desc=d;
		products[x].price=m;
		products[x].qty=n;
		localStorage.setItem("product",JSON.stringify(products));

    });
}
function deletepanel()
{
	var a=document.getElementById("a1");
	var b=a.childNodes;
	for(i=0;b.length>0;i++)
	{
		a.removeChild(b[0]);
	}
}
    function findindex(x)
    {
      for(i=0;i<products.length;i++)
      {
      	if(products[i].id==x)
      		return i;
      }
    }

	function add()
	{
		var obj=new Object();
		obj.id=i;
		obj.name=document.getElementById("id1").value;
		obj.desc=document.getElementById("id2").value;
		obj.price=document.getElementById("id3").value;
        obj.qty=document.getElementById("id4").value;
        if(obj.name.length==0)
	{unHideAddNewProductLink();
      alert("Name cant be left empty");
		return;}
	
	if(obj.desc.length==0)
	{unHideAddNewProductLink();
      alert("desc cant be left empty");
		return;}
	
	if(obj.price.length==0)
	{unHideAddNewProductLink();
      alert("price cant be left empty");
		return;}

	if(obj.qty.length==0)
	{unHideAddNewProductLink();
      alert("quant cant be left empty");
		return;}

		products.push(obj);
		localStorage.setItem("product",JSON.stringify(products));
		var a=document.createElement("div");
		a.setAttribute("id",obj.id);
		var zz=findindex(obj.id);
		var b=document.getElementById("a3");
		b.setAttribute("class","item");
		var c=document.createTextNode("PRODUCT NAME:-"+products[zz].name+"   ");
		var d=document.createTextNode("PRODUCT PRICE:-"+products[zz].price+"  ");
		var m=document.createTextNode("PRODUCT QTY:-"+products[zz].qty+"  ");
		a.append(c);
		a.append(d);
		a.append(m);
		var e=document.createElement("button");
		//e.innerHTML="remove";
		var f=document.createTextNode("remove");
		e.setAttribute("class","sbtn");
		e.appendChild(f);
		a.append(e);
		var update = document.createElement("button");
	update.setAttribute("id","update");
	update.setAttribute("class","sbtn");
	update.innerHTML = "UPDATE";
	
	var cart = document.createElement("button");
	cart.setAttribute("id","cart");
	cart.setAttribute("class","sbtn");
	cart.innerHTML = "ADD CART";
	    a.append(update);
	    a.append(cart);
		b.append(a);
		e.addEventListener("click",function(){
			b.removeChild(a);
			var x=findindex(a.id);
			products.splice(x,1);
			localStorage.setItem("product",JSON.stringify(products));

		});
		update.addEventListener("click",function(){
			deletepanel();
			editproduct(a);
		});
		cart.addEventListener("click",function(){
			var s=new Object();
			s.id=a.id;
			s.name=products[zz].name;
			s.desc=products[zz].desc;
			s.price=products[zz].price;
			s.qty=products[zz].qty;
			cartt.push(s);
			alert("Added to cart");
			localStorage.setItem("cartt",JSON.stringify(products));

		});
		
		i++;

	}
	function hideAddNewProductLink()
{
   panellink.setAttribute("style","visibility:hidden");
}
function adom(x)
{
	var b=document.getElementById("a3");
    var a=document.createElement("div");
    console.log(x.id);
    a.setAttribute("id",x.id);
    var c=document.createTextNode("PRODUCT NAME:-"+x.name+"   ");
   var d=document.createTextNode("PRODUCT PRICE:-"+x.price+"  ");
   var m=document.createTextNode("PRODUCT QTY:-"+x.qty+"  ");
   a.appendChild(c);
   a.appendChild(d);
   a.appendChild(m);
   var e=document.createElement("button");
		//e.innerHTML="remove";
		var f=document.createTextNode("remove");
		e.setAttribute("class","sbtn");
		e.appendChild(f);
		a.appendChild(e);
		var update = document.createElement("button");
	update.setAttribute("id","update");
	update.setAttribute("class","sbtn");
	update.innerHTML = "UPDATE";
	var cart = document.createElement("button");
	cart.setAttribute("id","cart");
	cart.setAttribute("class","sbtn");
	cart.innerHTML = "ADD CART";
	    a.appendChild(update);
	    a.appendChild(cart);
		b.appendChild(a);
		e.addEventListener("click",function(){
			b.removeChild(a);
			var xx=findindex(a.id);
			products.splice(xx,1);
			localStorage.setItem("product",JSON.stringify(products));

		});
		update.addEventListener("click",function(){
			deletepanel();
			editproduct(a);
		});
		cart.addEventListener("click",function(){
			var s=new Object();
			s.id=x.id;
			s.name=x.name;
			s.desc=x.desc;
			s.price=x.price;
			s.qty=x.qty;
			cartt.push(s);
			alert("Added to cart");
			localStorage.setItem("cartt",JSON.stringify(cartt));

		});
	

}

function f()
{
	hideAddNewProductLink();
	var a=document.getElementById("a1");
	var b=document.createElement("input");
	b.setAttribute("type","text");
	b.setAttribute("placeholder","enter product name");
	b.setAttribute("id","id1");
	b.setAttribute("style","width:1000px;height:25px");
	a.appendChild(b);
    break1();
    break1();
	var a=document.getElementById("a1");
	var b=document.createElement("textarea");
	b.setAttribute("type","text");
	b.setAttribute("placeholder","enter the product description");
	b.setAttribute("id","id2");
	b.setAttribute("style","width:1000px;height:50px");
	a.appendChild(b);
    break1();
    break1();
	var a=document.getElementById("a1");
	var b=document.createElement("input");
	b.setAttribute("type","text");
	b.setAttribute("placeholder","enter product price");
	b.setAttribute("id","id3");
	b.setAttribute("style","width:1000px;height:25px");
	a.appendChild(b);
    break1();
    break1();
	var a=document.getElementById("a1");
	var b=document.createElement("input");
	b.setAttribute("type","text");
	b.setAttribute("placeholder","enter the product quantity");
	b.setAttribute("id","id4");
	b.setAttribute("style","width:1000px;height:25px");
	a.appendChild(b);
    break1();
    break1();
var a=document.getElementById("a1");
	var b=document.createElement("button");
	var c=document.createTextNode("add button");
	b.appendChild(c);
	b.setAttribute("id","id5");
	b.setAttribute("class","sbtn");
	b.setAttribute("style","width:100px;height:25px");
	a.appendChild(b);
	b.addEventListener("click",add);


    }
