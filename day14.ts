type DecipherNaughtyList<T,Arr extends any[]=[]> = T extends `${infer A}/${infer B}`
?DecipherNaughtyList<B,[A,...Arr]>
:[T,...Arr][number];
