(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"blueEyes",image:"/images/blueEyes.jpg",clicked:!1},{id:2,name:"blue face",image:"/images/blue.png",clicked:!1},{id:3,name:"Muliple Sponge Bobs",image:"/images/bobBobBob.png",clicked:!1},{id:4,name:"cartoon cat",image:"/images/cat.jpg",clicked:!1},{id:5,name:"green face",image:"/images/greenFace.png",clicked:!1},{id:6,name:"happy face",image:"/images/happy.jpg",clicked:!1},{id:7,name:"mad face",image:"/images/mad.jpg",clicked:!1},{id:8,name:"square shaped pig",image:"/images/Pig.jpg",clicked:!1},{id:9,name:"red crossed eyes",image:"/images/redCrossEyes.png",clicked:!1},{id:10,name:"red girl eyes",image:"/images/redGirl.png",clicked:!1},{id:11,name:"red eyes",image:"/images/redEyes.png",clicked:!1},{id:12,name:"cute Sponge Bob",image:"/images/SpongeBob.jpg",clicked:!1}]},,,function(e,a,c){e.exports=c(20)},,,,,,function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){"use strict";c.r(a);var t=c(0),n=c.n(t),i=c(2),o=c.n(i),r=(c(15),c(3)),s=c(4),l=c(7),d=c(5),m=c(8),u=(c(16),function(e){return n.a.createElement("div",null,"Score: ",e.score," | High Score: ",e.highScore," | Round: ",e.round)}),g=(c(17),function(e){return n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("a",{href:"myporfolio.com",className:"left brand-logo"},"Clicky-Game"),n.a.createElement("ul",{id:"nav-mobile",className:"right"},n.a.createElement("li",null,n.a.createElement(u,{score:e.score,highScore:e.highScore,round:e.round})))))});c(18);var p=function(e){return n.a.createElement("div",{className:"wrapper row"},e.children)},h=(c(19),function(e){return n.a.createElement("div",{onClick:function(a){e.picClicked(a.target.id)},className:"pics col s12 m4 l3"},n.a.createElement("img",{src:e.src,alt:e.alt,id:e.id}))}),f=c(6),k=function(e){function a(){var e,c;Object(r.a)(this,a);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(c=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={pics:f,score:0,highScore:localStorage.getItem("localHighScore"),round:1,clickedIds:[],roundScore:0},c.gameOver=function(){c.setState({score:0,roundScore:0,clickedIds:[],round:1}),alert("Nooooo! You lost!")},c.youWin=function(){c.setState({round:c.state.round+1,clickedIds:[],roundScore:0}),alert("You win!!")},c.addScore=function(e){c.setState({score:c.state.score+1,roundScore:c.state.roundScore+1},function(){c.state.score>c.state.highScore&&c.setState({highScore:c.state.score}),localStorage.setItem("localHighScore",c.state.score),12===c.state.roundScore&&c.youWin(),c.state.clickedIds.push(e)})},c.onPickClicked=function(e){c.state.clickedIds.includes(e)?c.gameOver():c.addScore(e)},c}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(p,null,n.a.createElement(g,{score:this.state.score,round:this.state.round,highScore:this.state.highScore}),n.a.createElement("div",{className:"container"},this.state.pics.sort(function(e,a){return.5-Math.random()}).map(function(a,c){return n.a.createElement(h,{key:c,picClicked:e.onPickClicked,src:a.image,alt:a.name,id:a.id})})))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.91e623fe.chunk.js.map