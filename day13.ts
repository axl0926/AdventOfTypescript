type FillArrayFromLength<Length extends number,Arr extends number[] = []> = 
Arr['length'] extends Length?Arr:FillArrayFromLength<Length,[0,...Arr]>;

type Fill2DArray<Start extends number , End extends number,Arr extends number[][] = [FillArrayFromLength<Start>]> = Arr extends [...infer _,infer Last]
?Last extends number[]
?Last['length'] extends End
?Arr
:Fill2DArray<Start,End,[...Arr ,[0,...Last]]>
:false
:false

type ArrToLength<T extends any[]>= T extends [infer A,...infer B]? A extends number[]?ArrToLength<[...B,A['length']]>:T:false;

type DayCounter<T extends number,U extends number> = ArrToLength<Fill2DArray<T,U>> extends (infer A)[]?A:false


