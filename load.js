  $(document).ready(function() {
    checkFileAPI();
  
    $("#fileInput").change(function(){
      if(this.files && this.files[0]) {
        reader = new FileReader();
        reader.onload = function (e) {
          // do parsing here. e.target.result is file contents
          $("#superroot").html(e.target.result);
          $(".caption-style-1").on('click', 'li', function(){
            $(".caption-style-2").append($(this).append());
          });
    
    
          $(".caption-style-2").on('click', 'li', function(){
            $(".caption-style-1").append($(this).append());
          });
    
    
        };
        reader.readAsText(this.files[0]);
      };
    });
  });
  

  function checkFileAPI() { //check if api is supported (req HTML5)
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      return true;
    }else{
      alert('The File APIs are not fully supported by your browser. Use a newer browser.');
      return false;
    };
  };

  jQuery("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    jQuery(".dropzone").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });