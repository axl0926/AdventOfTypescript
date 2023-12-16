
type FindSanta2<T extends any[]>= T extends [...infer A ,infer B]
?B extends '🎅🏼'
?A['length']
:FindSanta2<[...A]>
:false

type FindSanta<T extends any[][]>= T extends [...infer A ,infer B] 
?B extends any[]?A extends any[]

?FindSanta2<[...B]> extends false
?FindSanta<A>	
:[A['length'],FindSanta2<[...B]>]
:false

:false:false;

