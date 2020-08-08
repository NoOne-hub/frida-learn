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

    console.log("enumMethos start");
    
	var func_n = enumMethods("com.fenbi.android.question.common.render.MemberVideoRender");
    
	func_n.forEach(function(s){
		console.log(s);
	});
    console.log("enumMethos end");

    console.log("hook start");
    
    var api_sec = Java.use("com.fenbi.android.question.common.render.MemberVideoRender");
    api_sec.a.overload("com.fenbi.android.business.ke.data.Episode","int").implementation = function(x,y){
        console.log(x);
        console.log(y);
        var result = this.a(x,100);
        console.log(result);
    };
    api_sec.a.overload("com.fenbi.android.business.ke.data.Episode","java.lang.Integer").implementation = function(x,y){
        console.log(x);
        console.log(y);
        var result = this.a(x,100);
        console.log(result);
    }
    api_sec.a.overload('java.lang.String', 'com.fenbi.android.business.vip.data.UserMemberState').implementation = function(x, y){
        console.log(x);
        console.log(y);
        var result = this.a(x,y);
        return result;
    }
    api_sec.a.overload("java.lang.String","com.fenbi.android.business.ke.data.Episode","com.fenbi.android.business.vip.data.UserMemberState").implementation = function(x,y,z){
        console.log(x);
        this.a(x,y,z);
    }
    
    var state = Java.use("com.fenbi.android.business.vip.data.UserMemberState");
    
    state.getExpireTime.implementation = function(){
        var result = this.getExpireTime();
        console.log("getExpireTime: " + result);
        return result;
    }
    state.getMemberType.implementation = function(){
        var result = this.getMemberType();
        console.log("getMemberType: " + result);
        return 666;
    }
    state.hasFreeMember.implementation = function(){
        var result = this.hasFreeMember();
        console.log("hasFreeMember: " + result);
        return true;
    }
    state.isMember.implementation = function(){
        var result = this.isMember();
        console.log("isMember: " + result);
        return true;
    }
    console.log("hook complete");
    

});