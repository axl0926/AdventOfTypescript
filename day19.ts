/*Solution*/
type Emoji = ["🛹", "🚲", "🛴", "🏄"];

type Fill<Emoji, Length, Acc extends any[] = []> = Acc["length"] extends Length 
    ? Acc 
    : Fill<Emoji, Length, [Emoji, ...Acc]>;

type GetEmoji<Index extends number, EmojiArray extends any[] = Emoji> = EmojiArray[Index] extends string 
    ? EmojiArray[Index] 
    : GetEmoji<Index, [...EmojiArray, ...EmojiArray]>;

type Rebuild<T, Acc extends any[] = []> = T extends [...infer A, infer B] 
    ? Rebuild<A, [...Fill<GetEmoji<A["length"]>, B>, ...Acc]> 
    : Acc;

/*Tests*/
import { Expect, Equal } from 'type-testing';

type test_0_actual = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
type test_0_expected =  [
  '🛹', '🛹',
	'🚲',
	'🛴', '🛴', '🛴',
	'🏄', '🏄', '🏄',
	'🛹',
	'🚲',
	'🛴', '🛴',
];
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = Rebuild<[3, 3, 2, 1, 2, 1, 2]>;
type test_1_expected = [
	'🛹', '🛹', '🛹',
	'🚲', '🚲', '🚲',
	'🛴', '🛴',
	'🏄',
	'🛹', '🛹',
	'🚲',
	'🛴', '🛴'
];
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = Rebuild<[2, 3, 3, 5, 1, 1, 2]>;
type test_2_expected = [
	'🛹', '🛹',
	'🚲', '🚲', '🚲',
	'🛴', '🛴', '🛴',
	'🏄', '🏄', '🏄', '🏄', '🏄',
	'🛹',
	'🚲',
	'🛴', '🛴',
];
type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;


    