(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"blueEyes",image:"/clicky-game/images/blueEyes.jpg",clicked:!1},{id:2,name:"blue face",image:"/clicky-game/images/blue.png",clicked:!1},{id:3,name:"Muliple Sponge Bobs",image:"/clicky-game/images/bobBobBob.png",clicked:!1},{id:4,name:"cartoon cat",image:"/clicky-game/images/cat.jpg",clicked:!1},{id:5,name:"green face",image:"https://theartofnoise.github.io/clicky-game/images/greenFace.png",clicked:!1},{id:6,name:"happy face",image:"https://theartofnoise.github.io/clicky-game/images/happy.jpg",clicked:!1},{id:7,name:"mad face",image:"https://theartofnoise.github.io/clicky-game/images/mad.jpg",clicked:!1},{id:8,name:"square shaped pig",image:"https://theartofnoise.github.io/clicky-game/images/Pig.jpg",clicked:!1},{id:9,name:"red crossed eyes",image:"https://theartofnoise.github.io/clicky-game/images/redCrossEyes.png",clicked:!1},{id:10,name:"red girl eyes",image:"https://theartofnoise.github.io/clicky-game/images/redGirl.png",clicked:!1},{id:11,name:"red eyes",image:"https://theartofnoise.github.io/clicky-game/images/redEyes.png",clicked:!1},{id:12,name:"cute Sponge Bob",image:"https://theartofnoise.github.io/clicky-game/images/SpongeBob.jpg",clicked:!1}]},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),o=a(2),n=a.n(o),r=(a(15),a(3)),s=a(4),l=a(7),d=a(5),m=a(8),g=(a(16),function(e){return i.a.createElement("div",null,"Score: ",e.score," | High Score: ",e.highScore," | Round: ",e.round)}),u=(a(17),function(e){return i.a.createElement("nav",null,i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement("a",{href:"myporfolio.com",className:"left brand-logo"},"Clicky-Game"),i.a.createElement("ul",{id:"nav-mobile",className:"right"},i.a.createElement("li",null,i.a.createElement(g,{score:e.score,highScore:e.highScore,round:e.round})))))});a(18);var h=function(e){return i.a.createElement("div",{className:"wrapper row"},e.children)},p=(a(19),function(e){return i.a.createElement("div",{onClick:function(t){e.picClicked(t.target.id)},className:"pics col s12 m4 l3"},i.a.createElement("img",{src:e.src,alt:e.alt,id:e.id}))}),k=a(6),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={pics:k,score:0,highScore:localStorage.getItem("localHighScore"),round:1,clickedIds:[],roundScore:0},a.gameOver=function(){a.setState({score:0,roundScore:0,clickedIds:[],round:1}),alert("Nooooo! You lost!")},a.youWin=function(){a.setState({round:a.state.round+1,clickedIds:[],roundScore:0}),alert("You win!!")},a.addScore=function(e){a.setState({score:a.state.score+1,roundScore:a.state.roundScore+1},function(){a.state.score>a.state.highScore&&a.setState({highScore:a.state.score}),localStorage.setItem("localHighScore",a.state.score),12===a.state.roundScore&&a.youWin(),a.state.clickedIds.push(e)})},a.onPickClicked=function(e){a.state.clickedIds.includes(e)?a.gameOver():a.addScore(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h,null,i.a.createElement(u,{score:this.state.score,round:this.state.round,highScore:this.state.highScore}),i.a.createElement("div",{className:"container"},this.state.pics.sort(function(e,t){return.5-Math.random()}).map(function(t,a){return i.a.createElement(p,{key:a,picClicked:e.onPickClicked,src:t.image,alt:t.name,id:t.id})})))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.6c710397.chunk.js.map