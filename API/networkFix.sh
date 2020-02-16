#!/bin/bash

myvar=$(ls -l /etc/netplan/01-netcfg.yaml | grep -Eo '[0-9]{3}')
if [[ $myvar == 366 ]]; then
	mv /etc/netplan/01-netcfg.yaml ~/networkFix
	mv 01-netcfg.yaml /etc/netplan/
else
	mv /etc/netplan/01-netcfg.yaml ~
	mv ~/networkFix/01-netcfg.yaml /etc/netplan/
fi
netplan generate
netplan apply
