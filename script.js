<script>
$(document).ready(function(){
/* function when clickthe button */
$("button").click(function(){

/* this if else to change the text in the button */
if($("button").text() == "☰"){
$("button").text("🞬");
}else{
$("button").text("☰");
}

/* this function toggle the visibility of our "li" elements */
$("li").toggle("slow");
})}
</script>