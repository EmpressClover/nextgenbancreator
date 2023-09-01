

function takescreenshot() {
        
    html2canvas(document.querySelector("#root")).then(canvas => {
        window.open().    document.body.appendChild(canvas);
    });
    
    }

    $(".caption-style-1").on('click', 'li', function(){
        $(".caption-style-2").append($(this).append());
      });


      $(".caption-style-2").on('click', 'li', function(){
        $(".caption-style-1").append($(this).append());
      });


      function takescreenshot2() {
        
        html2canvas(document.querySelector("#root3")).then(canvas => {
            window.open().    document.body.appendChild(canvas);
        });
        
        }
    
        $(".caption-style-1").on('click', 'li', function(){
            $(".caption-style-2").append($(this).append());
          });
    
    
          $(".caption-style-2").on('click', 'li', function(){
            $(".caption-style-1").append($(this).append());
          });



  function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}


$(".root2").css('borderColor', get_random_color());


$(document).ready(function() {

    var description = [
        "render4.webp",
        "render.webp",
        "render6.webp",
        "render8.webp"
    ];
  
    var size = description.length
    $('.item img').each(function() {
      var x = Math.floor(size * Math.random())
      if ($(this).hasClass("render")) {
        $(this).attr("src", description[x]);
      }


    });

  
  });


  $(document).ready(function() {

    var description = [
        "render3.webp",
        "render2.webp",
        "render5.webp",
        "render7.webp"
    ];
  
    var size = description.length
    $('.item img').each(function() {
      var x = Math.floor(size * Math.random())
      if ($(this).hasClass("render2")) {
        $(this).attr("src", description[x]);
      }


    });

  
  });



  function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("load.js");


$("#fileInput").val('');



let dragged;
let id;
let index;
let indexDrop;
let list;

  document.addEventListener("dragstart", ({target}) => {
      dragged = target;
      id = target.id;
      list = target.parentNode.children;
      for(let i = 0; i < list.length; i += 1) {
      	if(list[i] === dragged){
          index = i;
        }
      }
  });

  document.addEventListener("dragover", (event) => {
      event.preventDefault();
  });

  document.addEventListener("drop", ({target}) => {
   if(target.className == "dropzone" && target.id !== id) {
       dragged.remove( dragged );
      for(let i = 0; i < list.length; i += 1) {
      	if(list[i] === target){
          indexDrop = i;
        }
      }
      console.log(index, indexDrop);
      if(index > indexDrop) {
      	target.before( dragged );
      } else {
       target.after( dragged );
      }
    }
  });

