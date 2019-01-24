import boto3

from settings import region_name

print(region_name)
glacier = boto3.resource('glacier')
account = glacier.Account('id')
print(account)
