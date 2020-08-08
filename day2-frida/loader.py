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

