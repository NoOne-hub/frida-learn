import time
import frida
import base64

def my_message_handler(message, payload):
	print(message)
	print(payload)
	if message["type"] == "send":
		print(message["payload"])
		data = message["payload"].split(":")[1].strip()
		print("message:", message)
		data = base64.b64decode(data.encode())
		data = data.decode()
		print(data)
		user, pwd = data.split(":")
		middle = "admin" + ":" + pwd
		middle = middle.encode()
		data = base64.b64encode(middle).decode()
		print("encoded data", data)
		final_result = {"my_data": data}
		print(final_result)
		script.post(final_result)
		print("Modified data send")

device = frida.get_usb_device()
pid = device.spawn(["com.example.app1"])
device.resume(pid)
time.sleep(1)
session = device.attach(pid)
with open("s3.js") as f:
	script = session.create_script(f.read())

script.on("message", my_message_handler)
script.load()
input()
