console.log("Script loaded successfully");

function callSecretFun(){//define export functon
	Java.perform(function (){//find the secret func
		Java.choose("com.example.app1.MainActivity",{
			onMatch: function(instance){
				console.log("Found instance: " + instance);
				console.log("Result of secret func: " + instance.secret());
			},
			onComplete:function(){}
		});
	});
}

rpc.exports = {
	callsecretfunction: callSecretFun //export calSecretFun
};
