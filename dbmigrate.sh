#!/bin/bash
address = 3.22.236.7


if [$1 == "m"] || [$1 == "migrate"] || [$1 == "write"] || [$1 == "w"];
then
date = $(date +%Y-%m-%d-%M-%S)
mkdir -p /home/ubuntu/backup
mkdir -p /home/ubuntu/DB
FILES = /home/ubuntu/DB/*

if ["$(ls -A /home/ubuntu/DB)"];
then
for output in $FILES
do
fileName = "${output##*/}"
mv $output /home/ubuntu/backup/"$date-$fileName"
done
mysqldump -umyuser -pMarioGalaxy1* -d -B --events --routines --triggers marioGalaxy >/home/ubuntu/DB/database_example.sql

scp -r -i /home/IT-490-/migration/dbvm.pem ubuntu@$address:/home/ubuntu/DB/* /home/ubuntu/DB
echo Successful migration of new files and backed up $date files.
echo Successful migration of new files and backed up $date files. >> /home/IT-490-/migrateLog
else
echo Successful mirgation of new files. DB empty
echo Successful migration of new files. DB empty >> /home/IT-490-/migrateLog
scp -r -i /home/IT-490-/migration/dbvm.pem ubuntu@$address:/home/ubuntu/DB/* /home/ubuntu/DB/
fi

elif [[$1 == "r"]] || [[$1 == "revert"]]
then
for output in "/home/ubuntu/backup"/$2*
do
fileName = "${output##*/}"
fileName2 = ${fileName:17}
mv $output /home/ubuntu/DB/$fileName2
done

echo Successful revert of $date files back to DB folder
echo Successful revert of $date files back to DB folder >> /home/IT-490-/migrateLog
else
echo Enter valid migrate input or revert operation
echo Enter valid migrate input or revert operation >> /home/IT-490-/migrateLog
fi
