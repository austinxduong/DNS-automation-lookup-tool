* to make your life easier, free to all

``` diff
* resimplfying
 updated Jul 30, 2022
Checks & validates DNS records for given domain/subdomain: 
  - MX record
  - TXT record
  - CNAME record
  - SSL certificate (TBD?)

Stretch goals:
 - when CNAME is selected via. drop-down, provides end-user with proper text format to target CNAME in DNS config.
+ Text to Display
+ Refactor to Component Architecture
+ Refeactor form to custom hooks

```

Test API integration (TXT record):
```diff
+ successfully returns object of TXT record values in string
  - DNSData[dnsRecords][0][rawText]
   - Append to a 2-row table
   - Adopts + implements REST architechture

```

Open Source Libraries:
```diff
+ Formik helps make building out forms easier and feels streamlined *updated Sept 11, 2022
```
- https://formik.org/ 

![Screen Shot 2022-09-02 at 9 13 47 PM](https://user-images.githubusercontent.com/78833034/188255482-c650704d-1963-450f-b01f-f315e9d69400.png)


MIT License

Copyright (c) 2022 Austin X. Duong

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

preface:


Support: austinxduong@gmail.com | austi.dev
