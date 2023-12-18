type Count<T,U,Acc extends any[]=[]> = 
T extends [infer A ,...infer B]
? Count<B,U, (A extends U ? [A,...Acc] : [...Acc] ) >
: Acc['length'];


