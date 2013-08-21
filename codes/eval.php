<script>
var func = <?php echo json_encode($user_send['func']); ?>;
eval(func + "()");
function sayHello() {}
function sayGoodbye() {}
</script>