function id_fill(N){
    var id=[];
    for(var i=0;i<N;i++){
        id[i]=i;
        
    }
    return id;
}

var id=id_fill(10);
 
function void_union(p,q,id){
    var pid=id[p];
    var qid=id[q];
    
    for (var i=0;i<id.length;i++){
        console.log("pid:"+pid+" id["+i+"]:"+id[i]);
        
        if(id[i]===pid){id[i]=qid;}
    }
    return id;
}

