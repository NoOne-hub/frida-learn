import time
import frida


def my_message_handler(message, payload):
	print(message)
	print(payload)
device = frida.get_usb_device()
pid = device.spawn(["com.example.app1"])
device.resume(pid)
time.sleep(1)
session = device.attach(pid)
with open("s2.js") as f:
	script = session.create_script(f.read())

script.on("message", my_message_handler)
script.load()
command = ""
while True:
	command = input("Enter command:\n1: Exit\n2:Call secret function\nchoice:")
	if command == "1":
		break
	else:
		script.exports.callsecretfunction()

