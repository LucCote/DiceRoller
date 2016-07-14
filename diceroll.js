var number;
var rolls;
var dicePic;
var form;
var ns;
var person;
var ref = new Firebase("https://diceroller-f0a1a.firebaseio.com/rolls");
var list = ref.child("rolls");
var visits = ref.child("visits");
$(document).ready(function(){
	
	list.on('value', function(snapshot) {//when value of rolls changes take a snapshot
  			$("#recentrolls").html(snapshot.val());//display value of snapshot
		});
	visits.push("visitor");
	dicePic = new Image(200,200);
	$("#inputs").submit(function(e){
		e.preventDefault();
		form = document.forms[0];
		rolls = form.elements["dicenumber"].value;
		if(rolls < 501){
			number= new Array(rolls);
			ns = new Array(rolls);
			for (var x=0; x<rolls; x++){
			number[x] = Math.floor((Math.random()*6)+1);
			if (x<rolls-1){
				ns[x]=number[x] + ", ";
			}else {
				ns[x]=number[x];
			}
			}
		if(number[0] == 1){
		   dicePic.src = "http://anjinhyu.is2.byuh.edu/cis101.2112/100/1.png";
		}else if(number[0] == 2){
			dicePic.src = "http://dobbelsteen.virtuworld.net/img/2c.gif";
		}else if(number[0] == 3){
			dicePic.src = "http://www.clker.com/cliparts/M/e/P/O/L/b/dice-3-md.png";
		}else if(number[0] == 4){
			dicePic.src = "http://anjinhyu.is2.byuh.edu/cis101.2112/100/4.png";
		}else if(number[0] == 5){
			dicePic.src = "http://1.bp.blogspot.com/-TQmChmYJv0k/VMcKLEUh5vI/AAAAAAAAIW4/ENvlxOi4Oeo/s1600/dice-05.png";
		}else if(number[0] == 6){
			dicePic.src = "http://gsanteco.is2.byuh.edu/cis101.2145/dice/6.png";
		}
		$("#text1").html("Outcome:");
		$("#outcome").html(ns);
		$("#dice").attr("src", dicePic.src);
		person = form.elements["Name"].value;
		list.set(person+": "+number);
		}else{
			alert("you can only roll up to 500 dice");
		}
		document.getElementById("inputs").reset();
	});
});
