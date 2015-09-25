def ID_Init(id_length):
    c=0
    id=[]
    while c<id_length:
        
        id.append(c)
        c+=1
    return id


def CheckIfRoot(id,i):
    while i != id[i]:
        i=id[i]
    return i        

def QuickUnion(id,p,q):
    i=CheckIfRoot(id,p)
    j=CheckIfRoot(id,q)
    id[i]=j
    return id;