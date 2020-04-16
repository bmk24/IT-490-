#!/bin/sh
if ps -ef | grep -v grep | grep cache.py; then
       pkill -f cache.py
       nohup python3 /home/ubuntu/cache.py &
       exit 0
else
       echo "not running"
       nohup python3 /home/ubuntu/cache.py &
       exit 0
fi

