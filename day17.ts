// This code was assisted by another person
type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';
type R= '👊🏻🖐🏾✌🏽👊🏻'
type WhoWins<T extends RockPaperScissors,U extends RockPaperScissors> =  T extends U?'draw':
	R extends `${infer _}${T}${U}${infer _}`?'win':'lose' ;

