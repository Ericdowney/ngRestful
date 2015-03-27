# ngRestful
Angularjs directives for making restful api calls.

## ng-restful

Here is a list of all available attributes for the ngRestful directive.  While it supports all major rest methods, GET, PUT, POST, it is more valuable to use this directive for GET requests only because this directive will make the rest call once your page and angular load.  However, if you have a use case for immediately "Posting" or "Puting", this directive will still execute the rest call.

#### Usage
```html
<ng-restful rest-model="myDataModel"
            rest-url="'http://www.route.com/'"
            rest-method="GET"
            rest-params="params"
            rest-success="successMethod"
            rest-error="errorMethod"
            rest-watch-url="true"
            rest-watch-params="false">

    <div ng-repeat="item in myDataModel">{{item}}</div>
</ng-restful>
```

| Atrributes        | Binding | Example Values          |
|-------------------|:-------:|-------------------------|
| rest-model        | =       | {}                      |
| rest-url          | =       | 'http://route'          |
| rest-method       | @       | GET, PUT, POST, etc.    |
| rest-params       | =       | {}                      |
| rest-success      | &       | function () {}          |
| rest-error        | &       | function () {}          |
| rest-watch-url    | @       | true, false             |
| rest-watch-params | @       | true, false             |

## ng-restful-form


# License

The MIT License (MIT)

Copyright (c) 2015 Ericdowney

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
