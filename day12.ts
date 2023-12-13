type FindSanta<T extends any[]> = T extends [...infer A,infer B]
?B extends '🎅🏼'
?A['length']
:FindSanta<A>
:never
