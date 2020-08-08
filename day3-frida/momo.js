function enumMethods(targetClass)
{
	var hook = Java.use(targetClass);
	var ownMethods = hook.class.getDeclaredMethods();
	hook.$dispose;
	return ownMethods;
}
function newWriteCharacteristic(data)
{
    var hexstr="";
    for (var i=0;i<data.length;i++)
    {
        var b=(data[i]>>>0)&0xff;
        var n=b.toString(16);
        hexstr += ("00" + n).slice(-2)+" ";
    }
    console.log("Output: " + hexstr);
}
Java.perform(function(){
    /*
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
    */
    /*
    console.log("enumMethos start");
    
	var func_n = enumMethods("com.immomo.module_net.interceptor.i");
	func_n.forEach(function(s){
		console.log(s);
	});
    console.log("enumMethos end");
    */
    console.log("hook start");

    var string_class = Java.use("java.lang.String");
    //0xd6013000.dex
    
    var api_sec = Java.use("com.immomo.module_net.interceptor.i");
    
    var request_class = Java.use("com.cosmos.mmenc.util.Base64");
    /*
    request_class.encode.implementation = function(x){
        newWriteCharacteristic(x);
        var arr = Java.use("java.util.Arrays");
        console.log(arr.toString(x));
        var result = this.encode(x);
        console.log(result);
        return result;
    }
    api_sec.buildRealEncodeBytes.implementation = function(x, y){
        console.log("paramHolder: " +x);
        console.log("originStr: " +y);
        var result = this.buildRealEncodeBytes(x,y);
        var arr = Java.use("java.util.Arrays");
        console.log(arr.toString(result));
        return result;
    }*/
    api_sec.decode.overload('com.immomo.module_net.interceptor.i$a', 'okhttp3.Response', 'okhttp3.Request').implementation = function(x, y,z){
        console.log(x);
        console.log(y);
        console.log(z);
        var result = this.decode(x,y,z);
        console.log(result);
        return result;
    }
    /*
    api_sec.encode.implementation = function(x,y){
        console.log("paramHolder" + x);
        console.log("request" + y);
        var result = this.encode(x,y);
        console.log("result is: " + result);
        return result;
    };
    api_sec.getSign.implementation = function(x, y,z){
        console.log("mzip: " + x);
        var my_string = string_class.$new(x);
        console.log(my_string)
        console.log("headers: " + y);
        console.log("aesKey: " + z);
        var result = this.getSign(x,y,z);
        console.log("getSign result: " + result);
        return result;
    };
    api_sec.addEncryptHeaderParams.implementation = function(x, y){
        console.log("Builder: " + x);
        console.log("paramHolder: " +y);
        this.addEncryptHeaderParams(x,y);
    }
    api_sec.decode.implementation = function(x, y){
        console.log("decode start");
        console.log("paramHolder: " + x);
        console.log("response: " + y);
    }
    var codedlib = Java.use("com.cosmos.codedlib.Coded");
    codedlib.sign.implementation = function(x, y){
        var my_string = string_class.$new(x);
        console.log("bArr: " + x);
        console.log("bArr decode: " + my_string);
        my_string = string_class.$new(y);
        console.log("bytes2 decode: " +my_string);
        console.log(y);
        var result = this.sign(x,y);
        return result;
    }*/
    
    
    console.log("hook complete");
    

});