# apk1

这道题用两种方法做

1. rpc导出函数,用python爆破
2. js直接爆破



## rpc导出函数

导出为myfunc函数

```javascript
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


```

loader加载

```python
import time
import frida
import sys
import time

def my_message_handler(message, payload):
	if message['type'] == 'send':
		print(message['payload'])
	#if message['payload'] == '6f452303f18605510aac694b0f5736beebf110bf':
	#	print("success now")
		

device = frida.get_usb_device()
pid = device.spawn(["com.kanxue.pediy1"])
device.resume(pid)
time.sleep(1)
session = device.attach(pid)
with open("s2.js") as f:
	script = session.create_script(f.read())

script.on("message", my_message_handler)
script.load()
command = ""
start = time.time()
for i in range(60000,69000):
	print("[*]now the number is: "+str(i))
	script.exports.myfunc(str(i))
end = time.time()
print(end-start)


```

这里传参爆破



## js直接爆破

核心代码

```javascript
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
```

