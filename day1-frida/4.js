function enumMethods(targetClass)
{
	var hook = Java.use(targetClass);
	var ownMethods = hook.class.getDeclaredMethods();
	hook.$dispose;
	return ownMethods;
}
setTimeout(function(){
	Java.perform(function(){
		console.log("enumerating classes...");
		Java.enumerateLoadedClasses({
			onMatch: function(instance){
				if(instance.split(".")[1] == "bluetooth"){
					console.log("[->]\t" + instance);
				}
			},
			onComplete: function(){
				console.log("[*] class enuemration complete");
			}
		});
		var a = enumMethods("android.bluetooth.BluetoothManager");
		a.forEach(function(s){
			console.log(s);
		});
	});
});
