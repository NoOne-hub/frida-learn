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
	console.log("hook start");
	Java.use("com.kanxue.pediy1.VVVVV").VVVV.implementation = function(listener,input){
		console.log("input=", input);
            for (var i = 10000; i <= 99999; i++) {
                var newInput = Java.use('java.lang.String').$new(i.toString())
					console.log(newInput);
					var result = this.VVVV(listener,newInput);
					if(result == true){
						console.log('flag is ',newInput)
						return result;
                    }
            }
	}
});
