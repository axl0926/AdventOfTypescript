
type FindSanta2<T extends any[]>= T extends [...infer A ,infer B]
?B extends '🎅🏼'
?A['length']
:FindSanta2<[...A]>
:false

type FindSanta<T extends any[][]>= T extends [...infer A extends any[] ,infer B extends any[]] 
?FindSanta2<[...B]> extends infer R extends number
?[A['length'],R]
:FindSanta<A>	
:false;
