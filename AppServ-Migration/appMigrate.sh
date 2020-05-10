#!/bin/bash

fromAddress=34.229.47.176

if [ $1 == "m" ] || [ $1 == "migrate" ] || [ $1 == "write" ] || [ $1 == "w" ];

then
  date$(date +%Y-%m-%d-%M-%S)
  mkdir -p /home/ubuntu/backup
  mkdir -p /home/ubuntu/APP
  FILES=/home/ubuntu/APP/*
  if [ "$(ls -A /home/ubuntu/APP)" ]; then
  for output in $FILES
  do

  fileName="${output##*/}"

  mv $output /home/ubuntu/backup/"$date-$fileName"

  done
  scp -i /home/ubuntu/app.pem ubuntu@$fromAddress:/var/www/html/* /home/ubuntu/APP/
  echo Successfully migrated new files and backed up files as of $date.
  echo Successfully migrated new files and backed up files as of $date. >> /home/ubuntu/migrateLog
  else
  echo Successfully migrated new files. APP empty
  echo Successfully migrated new files. APP empty >> /home/ubuntu/migrateLog
  scp -i /home/ubuntu/app.pem ubuntu@$fromAddress:/var/www/html/* /home/ubuntu/APP/
  fi



  elif [[ $1 == "r" ]] || [[ $1 == "revert" ]]
  then


  for output in "/home/ubuntu/backup"/$2*
  do

  fileName="${output##*/}"
  filename2=${fileName:17}
  mv $output /home/ubuntu/APP/$filename2

  done
  echo Successfully reverted $timestamp files back to APP folder
  echo Successfully reverted $timestamp files back to APP folder >> /home/ubuntu/migrateLog
  else
   echo please input a valid migrate or revert operation
   echo please input a valid migrate or revert operation >> /home/ubuntu/migrateLog
  fi
