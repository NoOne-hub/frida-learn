@ECHO OFF
color 2f
ECHO su >>tmp
ECHO setenforce 0
ECHO cd /data/local/tmp >>tmp
ECHO ./frida-server  >>tmp
adb forward tcp:27042 tcp:27042
adb forward tcp:27043 tcp:27043
adb shell <tmp
