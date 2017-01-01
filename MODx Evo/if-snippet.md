# Snippet if

    [[if? &is=`[*id*]:is:5` &then=``]]
        
    [[if? &is=`[*id*]:is:4:or:[*parent*]:in:5,6,5,7,8,9` &then=`[[if? &is=`0||is||0` &then=`true` &else=`false` &separator=`||`]]` &else=`@TPL:else`]]<br [[if? &is=`[*id*]:is:1:or:[*id*]:is:2:and:[*parent*]:is:5:or:[*parent*]:in:2,3,4` &then=`true` &else=`false`]]
    
        
    [[if? &is=`[*parent*]:is:5` &then=`@TPL:chunk-name`]]
    
    [[if? &is=`[*parent*]:is:5:and:[*template*]:is:7` &then=`@TPL:chunk-name`]]
    
    [[if? &is=`[*parent*]:is:5:or:[*template*]:in:7,8,9` &then=`@TPL:chunk-name`]]
    
    
    [[if? &is=`[*parent*]:is:5:and:[*template*]:is:7:or:[*new*]:is:1` &then=` `]]
    
    [[if? &is=`[*price*]:gt:300:and:[*price*]:lte:700` &then=``]]
    
    Output in the multiplicity of records Ditto 3: [[if? &is=`[+ditto_iteration+]:%:3` &then=`true` &else=`false`]]
    
    Output in the multiplicity of records Ditto 3 but by multiplying [[if? &is=`[+ditto_iteration+]*2:%:3` &then=`true` &else=`false` &math=`on`]]
    
    Print the value of the mathematical expression<br />[[if? &is=`[+ditto_iteration+]*2` &math=`on`]]
    
    [[if? &is=`[*pagetitle*]:contains:string` &then=`]]</p>
    
    (is,=) , (not,!=) , (gt,&gt;) , (lt,&lt;) , (gte,&gt;=) , (&lt;=,lte) , (isempty,empty) , (notempty,!empty)<br />(null, is_null) , (in_array, inarray, in) , (not_in,!in) , (contains)
    
    [[if? &is=`eval('global $iteration;$iteration++;echo $iteration;')` &math=`on`]] 
