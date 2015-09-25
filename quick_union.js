function CheckIfRoot(id,i)
{
    while(i!=id[i])
    {i=id[i];}
    return i;
}

function QuickUnion(id,p,q)
{
 var i=CheckIfRoot(id,p);   
 var j=CheckIfRoot(id,q);
 id[i]=j;
 return id;
}