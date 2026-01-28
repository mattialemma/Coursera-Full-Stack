# Submit
How the form is submitted is determined by two essential attributes: action and method.

## Action
The action attribute defines where the form data is sent when the form is submitted. 
It can be a URL or a server-side script that processes the form data.

## Method
The method attribute defines how the form data is sent to the server. It can be GET or POST.

```html
<form action="/login"> 
</form> 
```
It is important to note that action can be a full URL address such as https://meta.com, an absolute path such as /login, or a relative path such as login. 

The absolute path, which starts with a forward slash, will use the base address of the current website, such as https://meta.com and combine it with the absolute path. For example, if /login is the absolute path, the form will be submitted to https://meta.com/login. 
If the address is https://meta.com/company-info/ and /login is the absolute path, the submission address will still be https://meta.com/login.

Similarly, a relative path will combine the current web address with a relative path. 
For example, if the web browser is currently on the web page https://meta.com/company-info/, and the relative path is set to login, the form will be submitted to https://meta.com/company-info/login. 


Absolute path
```html
<form action="https://meta.com/login"> 
</form> 
```

Relative path
```html
<form action="login"> 
</form> 
```



