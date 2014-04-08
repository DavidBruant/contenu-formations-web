(function(global){
    
    
    global.getContent = function(url){
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', url);
        
        xhr.addEventListener('load', function(){
            if(xhr.status < 400){
                console.log('content from', url, ':', xhr.responseText)
            }
            else{
                throw new Error('Could not get content from '+url);
            }
            
        });
    
        xhr.send();
        
    };
    
})(this)