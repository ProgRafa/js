//Arvore binária (Binary Tree)
var BinaryTree = function(){
    var nodo = function(value, l, r){
        this.value = value;
        this.left = l;
        this.right = r; 
    }
    nodo.prototype.addNodo = function(value, root = this){
        if(!root){
            root = new BinaryTree(value, null, null);
        }else{
            if(root.value > value)
                root.left = root.addNodo(value, root.left);
            else if(root.value == value)
                return null;
            else
                root.right = root.addNodo(value, root.right); 
        }
        return root; 
    }
    nodo.prototype.showTree = function(spc = 0, root = this){
        var space = '', sp = spc;
        //variavel local controla tabulação
        for(;spc > 0; spc--)
            space += '  ';

        if(!root){
            console.log(space+'null');
        }else{
            //printa nodo e acresce tabulação 
            console.log(space+'Nodo('+root.value+')');
            sp++;
            //percorre árvore pela direita
            root.showTree(sp, root.right);    
            //Percorre árvore pela esquerda
            root.showTree(sp, root.left);
        }
    }
    nodo.prototype.search = function(key, root=this){
        if(!root)
            return "Objeto não encontrado";
        if(root.value == key){
            return root;
        }else if(root.value > key){
            root = this.search(key, root.left);
        }else if(root.value < key){
            root = this.search(key, root.right);
        }
        return root;
    }
    nodo.prototype.removeNodo = function(nodo, root = this){
        if(typeof nodo === "string"){ console.log(nodo); }else{
            if(root.value == nodo.value){
                if(!nodo.left && !nodo.right)
                    return null;
                else if(nodo.right != null && !nodo.left)
                    return nodo.right;
                else if(nodo.left && !nodo.right)
                    return nodo.left;
                else if(nodo.left && nodo.right){
                    element = this.withChildrens(root);
                    if(typeof element == 'number')
                        root.value = element;
                    else{
                        var temp = root.left;
                        root = element;
                        root.left = temp;
                    }
                }
            }else{
                if(root.value > nodo.value){
                    root.left = this.removeNodo(nodo, root.left);
                }else{
                    root.right = this.removeNodo(nodo, root.right);
                }
            }
        }
        return root;
    }
    nodo.prototype.withChildrens = function(root){
        if(root.left.right){
            return this.leftRight(root.left);
        }else if(root.right.left){
            return this.rightLeft(root.right);
        }else{
            return root.right;
        }
    }
    nodo.prototype.leftRight = function(left){
        var temp;

        if(!left.right.right){
            temp = left.right.value;
            left.right = left.right.left;
            return temp;
        }else{
            temp = this.leftRight(left.right);
        }

        return temp;
    }
    nodo.prototype.rightLeft = function(right){
        var temp;

        if(!right.left.left){
            temp = right.left.value;
            right.left = right.left.right;
            return temp;
        }else{
            temp = this.rightLeft(right.left);
        }

        return temp;
    }
    nodo.prototype.AVL = function(){

    }
    return nodo;
}();

var root = new BinaryTree(10, null, null);
root.addNodo(5, root);
root.addNodo(15, root);
root.addNodo(13, root);
root.addNodo(18, root);
root.addNodo(2, root);
root.addNodo(14, root);
root.addNodo(12, root);
root.addNodo(17, root);
root.addNodo(19, root);
root.addNodo(6, root);
root.addNodo(9, root);
root.addNodo(7, root);
root.addNodo(1, root);
root.addNodo(3, root);




try{
    root.showTree();
}catch(err){
    console.log(typeof root);
    console.log(root)
    console.log("Árvore vazia");
}
root = root.removeNodo(root.search(10));
console.log("------------REMOÇÃO-----------------")
try{
    root.showTree();
}catch(err){
    console.log(typeof root);
    console.log(root)
    console.log("Árvore vazia");
}