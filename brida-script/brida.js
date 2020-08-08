function enumMethods(targetClass)
{
	var hook = Java.use(targetClass);
	var ownMethods = hook.class.getDeclaredMethods();
	hook.$dispose;
	return ownMethods;
}
Java.perform(function(){
	console.log("enumerating classes...");
	Java.enumerateLoadedClasses({
		onMatch: function(instance){
				if(instance.split(".")[1] == 'kanxue'){
					console.log("[*] found instance of'"+instance+"'");
				}
			},
			onComplete: function(){
				console.log("[*] class enumerate complete");
			}
		});
	var func_n = enumMethods("com.kanxue.pediy1.VVVVV");
	func_n.forEach(function(s){
		console.log(s);
	});
});
