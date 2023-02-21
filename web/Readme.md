# Contents
## mssdk.js
- Decrypts/Encrypts data sent to https://mssdk-va.tiktok.com/web/report
- Note: New data from tiktok gets also compressed with a L? algorithm (haven't looked into it yet)
## resource.js
- Decrypts the response data from https://mssdk-va.tiktok.com/web/resource
## eq.js
- Generates the query parameter needed for https://mssdk-va.tiktok.com/web/resource?eq=
## mssdkinfo.js
- Generates x-mssd-info used by some requests
