# Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# This file is licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License. A copy of the
# License is located at
#
# http://aws.amazon.com/apache2.0/
#
# This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
# OF ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.
#
# ABOUT THIS PYTHON SAMPLE: This sample is part of the AWS General Reference
# Signing AWS API Requests top available at
# https://docs.aws.amazon.com/general/latest/gr/sigv4-signed-request-examples.html
#

# AWS Version 4 signing example

# EC2 API (DescribeRegions)

# See: http://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html
# This version makes a GET request and passes the signature
# in the Authorization header.
import datetime
import hashlib
import hmac
import json
import os
import sys

import requests  # pip install requests

import settings

# ************* REQUEST VALUES *************
method: str = 'GET'
service: str = 'mobiletargeting'
host: str = 'pinpoint.us-east-1.amazonaws.com'
region: str = 'us-east-1'
endpoint: str = 'https://pinpoint.us-east-1.amazonaws.com'
print(endpoint)
request_parameters: str = ''


# Key derivation functions. See:
# http://docs.aws.amazon.com/general/latest/gr/signature-v4-examples.html#signature-v4-examples-python
def sign(key, msg):
    return hmac.new(key, msg.encode('utf-8'), hashlib.sha256).digest()


def get_signature_key(key, input_date_stamp, region_name, service_name):
    k_date = sign(('AWS4' + key).encode('utf-8'), input_date_stamp)
    k_region = sign(k_date, region_name)
    k_service = sign(k_region, service_name)
    k_signing = sign(k_service, 'aws4_request')
    return k_signing


# Read AWS access key from env. variables or configuration file. Best practice is NOT
# to embed credentials in code.
access_key = os.getenv('AWS_ACCESS_KEY')
secret_key = os.getenv('AWS_SECRET_KEY')
if access_key is None or secret_key is None:
    print('No access key is available.')
    sys.exit()

# Create a date for headers and the credential string
t = datetime.datetime.utcnow()
amazon_date = t.strftime('%Y%m%dT%H%M%SZ')
date_stamp = t.strftime('%Y%m%d')  # Date w/o time, used in credential scope

# ************* TASK 1: CREATE A CANONICAL REQUEST *************
# http://docs.aws.amazon.com/general/latest/gr/sigv4-create-canonical-request.html

# Step 1 is to define the verb (GET, POST, etc.)--already done.

# Step 2: Create canonical URI--the part of the URI from domain to query
# string (use '/' if no path)
canonical_uri = f"/v1/apps/{settings.PINPOINT_PROJECT}/channels/apns"
# print(f"The canonical uri is {canonical_uri}")

# Step 3: Create the canonical query string. In this example (a GET request),
# request parameters are in the query string. Query string values must
# be URL-encoded (space=%20). The parameters must be sorted by name.
# For this example, the query string is pre-formatted in the request_parameters variable.
canonical_querystring = request_parameters

# Step 4: Create the canonical headers and signed headers. Header names
# must be trimmed and lowercase, and sorted in code point order from
# low to high. Note that there is a trailing \n.
canonical_headers = 'host:' + host + '\n' + 'x-amz-date:' + amazon_date + '\n'

# Step 5: Create the list of signed headers. This lists the headers
# in the canonical_headers list, delimited with ";" and in alpha order.
# Note: The request can include any headers; canonical_headers and
# signed_headers lists those that you want to be included in the
# hash of the request. "Host" and "x-amz-date" are always required.
signed_headers = 'host;x-amz-date'

# Step 6: Create payload hash (hash of the request body content). For GET
# requests, the payload is an empty string ("").
payload_hash = hashlib.sha256(''.encode('utf-8')).hexdigest()

# Step 7: Combine elements to create canonical request
canonical_request = method + '\n' + canonical_uri + '\n' + request_parameters + '\n' + canonical_headers + '\n' + signed_headers \
                    + '\n' + payload_hash

print(f"The canonical request is {canonical_request}")

# ************* TASK 2: CREATE THE STRING TO SIGN*************
# Match the algorithm to the hashing algorithm you use, either SHA-1 or
# SHA-256 (recommended)
algorithm = 'AWS4-HMAC-SHA256'
credential_scope = date_stamp + '/' + region + '/' + service + '/' + 'aws4_request'
string_to_sign = algorithm + '\n' + amazon_date + '\n' + credential_scope + '\n' \
                 + hashlib.sha256(canonical_request.encode('utf-8')).hexdigest()

# ************* TASK 3: CALCULATE THE SIGNATURE *************
# Create the signing key using the function defined above.
signing_key = get_signature_key(secret_key, date_stamp, region, service)

# Sign the string_to_sign using the signing_key
signature = hmac.new(signing_key, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()

# ************* TASK 4: ADD SIGNING INFORMATION TO THE REQUEST *************
# The signing information can be either in a query string value or in
# a header named Authorization. This code shows how to use a header.
# Create authorization header and add to request headers
authorization_header = algorithm + ' ' + 'Credential=' + access_key + '/' + credential_scope + ', ' \
                       + 'SignedHeaders=' + signed_headers + ', ' + 'Signature=' + signature

# The request can include any headers, but MUST include "host", "x-amz-date",
# and (for this scenario) "Authorization". "host" and "x-amz-date" must
# be included in the canonical_headers and signed_headers, as noted
# earlier. Order here is not significant.
# Python note: The 'host' header is added automatically by the Python 'requests' library.
headers = {'x-amz-date': amazon_date, 'Authorization': authorization_header}

# ************* SEND THE REQUEST *************
request_url = endpoint + canonical_uri

print(f"\nBEGIN REQUEST\nRequest URL = {request_url}")
r = requests.get(request_url, headers=headers)

print('\nRESPONSE')
print('Response code: %d\n' % r.status_code)
print(json.dumps(json.loads(r.text), indent=4, sort_keys=True))
