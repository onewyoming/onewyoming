import boto3

from settings import aws_access_key_id

session = boto3.Session(profile_name='glacier')
glacier = boto3.resource('glacier')
account = glacier.Account(aws_access_key_id)
for vault in account.vaults.all():
    print(vault)
