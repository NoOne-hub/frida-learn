rpc.exports = {
	myfunc : function(input){
		var result = ''
		Java.perform(function(){
			var VVVVV = Java.use("com.kanxue.pediy1.VVVVV");
			var instance = VVVVV.$new();
			var result = instance.eeeee(input);
			var Str = Java.use("java.lang.String");
			result = Str.$new(result).toString();
			if(result == "6f452303f18605510aac694b0f5736beebf110bf")
				send(result);
		});
	}
}

