console.log("Script loaded successfully");

Java.perform(function x(){
    console.log("Inside java perform function");
    var my_class = Java.use("com.example.app1.MainActivity");
	console.log("Java.Use.Successsfully!");
	my_class.fun.overload("int", "int").implementation = function(x, y){
		console.log("original call: fun("+ x +", "+ y +")");
		var ret_value = this.fun(2, 5);
		return ret_value;
	};
	my_class.fun.overload("java.lang.String").implementation = function(x){
		console.log("original call: fun("+ x +")");
		var string_class = Java.use("java.lang.String");
		var my_string = string_class.$new("My Test String####");
		//var ret_value = this.fun("Inject String");
		var ret_value = this.fun(my_string);
		return ret_value;
	};
	Java.choose("com.example.app1.MainActivity", {
		onMatch : function(instance){
			console.log("Found Instance:" + instance + "\n");
			console.log("Result of secret func: " + instance.secret()+"\n");
		},
		onComplete:function(){
			console.log("Complete success");
		}
	});
});

