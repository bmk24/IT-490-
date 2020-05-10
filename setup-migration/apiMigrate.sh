#!/bin/bash
address=3.15.40.78
if [ $1 == "m" ] || [ $1 == "migrate" ] || [ $1 == "write" ] || [ $1 == "w" ]; 
then
date=$(date +%Y-%m-%d-%M-%S)
mkdir -p /home/ubuntu/backup
mkdir -p /home/ubuntu/API
FILES=/home/ubuntu/API/*
if [ "$(ls -A /home/ubuntu/API)" ]; then
for output in $FILES
do

fileName="${output##*/}"

mv $output /home/ubuntu/backup/"$date-$fileName"

done
scp -r -i /home/ubuntu/api.pem ubuntu@$address:/home/ubuntu/API/* /home/ubuntu/API/ 
echo Successfully migrated new files and backed up $date files.
echo Successfully migrated new files and backed up $date files. >> /home/ubuntu/migrateLog
else
echo Successfully migrated new files. API empty
echo Successfully migrated new files. API empty >> /home/ubuntu/migrateLog 
scp -r -i /home/ubuntu/api.pem ubuntu@$address:/home/ubuntu/API/* /home/ubuntu/API/ 
fi



elif [[ $1 == "r" ]] || [[ $1 == "revert" ]]
then 


for output in "/home/ubuntu/backup"/$2*
do

fileName="${output##*/}"
filename2=${fileName:17}
mv $output /home/ubuntu/API/$filename2

done 
echo Successfully reverted $date files back to API folder  
echo Successfully reverted $date files back to API folder >> /home/ubuntu/migrateLog
else
 echo please input a valid migrate or revert operation
 echo please input a valid migrate or revert operation >> /home/ubuntu/migrateLog
fi
