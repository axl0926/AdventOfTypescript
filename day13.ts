/*Solution*/
type FillArrayFromLength<Length extends number, Arr extends number[] = []> = Arr["length"] extends Length ? Arr : FillArrayFromLength<Length, [0, ...Arr]>;

type Fill2DArray<Start extends number, End extends number, Arr extends number[][] = [FillArrayFromLength<Start>]> = Arr extends [...infer _, infer Last] ? (Last extends number[] ? (Last["length"] extends End ? Arr : Fill2DArray<Start, End, [...Arr, [0, ...Last]]>) : false) : false;

type ArrToLength<T extends any[]> = T extends [infer A, ...infer B] ? (A extends number[] ? ArrToLength<[...B, A["length"]]> : T) : false;

type DayCounter<T extends number, U extends number> = ArrToLength<Fill2DArray<T, U>> extends (infer A)[] ? A : false;

/*Tests*/
import { Expect, Equal } from "type-testing";

type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type test_0_actual = DayCounter<1, 12>;
type test_0_expected = TwelveDaysOfChristmas;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type DaysUntilChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25;
type test_1_actual = DayCounter<1, 25>;
type test_1_expected = DaysUntilChristmas;
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;
