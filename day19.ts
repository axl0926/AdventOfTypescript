type Fill<T,U,Acc extends any[]=[]>=Acc['length'] extends U?Acc:Fill<T,U,[T,...Acc]>
type AA<T extends number,B extends any[]=['🛹' ,'🚲','🛴','🏄' ]>= B[T] extends string ? B[T] : AA<T,[...B,...B]>
type Rebuild<T,Acc extends any[]=[]> = T extends [...infer A,infer B]?Rebuild<A,[...Fill<AA<A['length']>,B>,...Acc]>:Acc;