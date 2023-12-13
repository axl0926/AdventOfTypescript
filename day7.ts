type AppendGood<T> = {
	[K in keyof T as `good_${ K extends string?K:never}`]:T[K] 
};


