<script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml      : true,
          version    : 'v2.3'
        });
         FB.Event.subscribe('edge.create', function(response) {
        console.log('clicking');
        processSubmit();

});
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = '//connect.facebook.net/en_US/sdk.js';
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));


    </script>

<div class='fb-like' data-href='https://www.facebook.com/GameRant' data-width='150' data-layout='box_count' data-action='like' data-show-faces='true' data-share='false' style='position: relative; top: 50px;   -ms-transform: scale(5,5); /* IE 9 */
    -webkit-transform: scale(5,5); /* Safari */
    transform: scale(5,5);'></div>