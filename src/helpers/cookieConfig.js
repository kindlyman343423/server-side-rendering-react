
import cookie from 'universal-cookie';

export default () =>{

 let guest_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjIxNzc0NTI3OTksImlhdCI6MTUxNjAyMjk5OSwiaXNzIjoiQmFzb2JhYXMgTmVwYWwiLCJuYmYiOjE1MTYwMjI5OTksImp0aSI6Ikd1ZXN0VG9rZW4iLCJzdWIiOjB9.QikmNgBYmqch5HREGFEpUs4Xk3x-zFfDg5mhYJO7jM8';

 const Cookies = new cookie();
 
 if(Cookies.get('token')){
  Cookies.set('token', Cookies.get('token'))
 }else{
  Cookies.set('token', guest_token);
 }
 return guest_token;
}