function superReducedString(s) {
   // Write your code here
  
for(let i = 1; i < s.length; i++){
     
       if( s[i - 1] === s[i]) {
           s = s.substring(0, i - 1) + s.substring(i + 1);
           i = 0;
       }
   }
   return s || 'Empty String';


}
