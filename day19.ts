type Fill<Emoji,Length,Acc extends any[]=[]> = Acc['length'] extends Length ? Acc : Fill<Emoji,Length,[Emoji,...Acc]>

type GetEmoji<Index extends number,EmojiArray extends any[]=['🛹' ,'🚲','🛴','🏄' ]> = EmojiArray[Index] extends string ? EmojiArray[Index] : GetEmoji<Index,[...EmojiArray,...EmojiArray]>

type Rebuild<T,Acc extends any[]=[]> = T extends [...infer A,infer B] ? Rebuild<A,[...Fill<GetEmoji<A['length']>,B>,...Acc]> : Acc;