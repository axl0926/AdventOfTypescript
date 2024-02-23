/*Solution*/
type Letters = {
    A: ["█▀█ ", "█▀█ ", "▀ ▀ "];
    B: ["█▀▄ ", "█▀▄ ", "▀▀  "];
    C: ["█▀▀ ", "█ ░░", "▀▀▀ "];
    E: ["█▀▀ ", "█▀▀ ", "▀▀▀ "];
    H: ["█ █ ", "█▀█ ", "▀ ▀ "];
    I: ["█ ", "█ ", "▀ "];
    M: ["█▄░▄█ ", "█ ▀ █ ", "▀ ░░▀ "];
    N: ["█▄░█ ", "█ ▀█ ", "▀ ░▀ "];
    P: ["█▀█ ", "█▀▀ ", "▀ ░░"];
    R: ["█▀█ ", "██▀ ", "▀ ▀ "];
    S: ["█▀▀ ", "▀▀█ ", "▀▀▀ "];
    T: ["▀█▀ ", "░█ ░", "░▀ ░"];
    Y: ["█ █ ", "▀█▀ ", "░▀ ░"];
    W: ["█ ░░█ ", "█▄▀▄█ ", "▀ ░ ▀ "];
    " ": ["░", "░", "░"];
    ":": ["#", "░", "#"];
    "*": ["░", "#", "░"];
};

type StringToAsciiRow<Str extends string, Index extends number, Acc extends string = ""> = Uppercase<Str> extends `${infer First extends keyof Letters}${infer Rest}` ? StringToAsciiRow<Rest, Index, `${Acc}${Letters[`${First}`][Index]}`> : Acc;

type ParseNewlines<Str extends string, Acc extends any[] = []> = Str extends `${infer First}\n${infer Rest}` ? ParseNewlines<Rest, [...Acc, First]> : [...Acc, Str];

type StringToAscii<Str extends string, Acc extends string[] = []> = Acc["length"] extends 3 ? Acc : StringToAscii<Str, [...Acc, StringToAsciiRow<Str, Acc["length"]>]>;

type ArrayToAscii<Arr extends string | string[], Acc extends any[] = []> = Arr extends [infer First extends string, ...infer Rest extends string[]] ? ArrayToAscii<Rest, [...Acc, ...StringToAscii<First>]> : Acc;

type ToAsciiArt<Str extends string> = ArrayToAscii<ParseNewlines<Str>>;


/*Tests*/
import { Equal, Expect } from "type-testing";

type test_0_actual = ToAsciiArt<"   * : * Merry * : *   \n  Christmas  ">;
type test_0_expected = [
  "░░░░░#░░░█▄░▄█ █▀▀ █▀█ █▀█ █ █ ░░░#░░░░░",
  "░░░#░░░#░█ ▀ █ █▀▀ ██▀ ██▀ ▀█▀ ░#░░░#░░░",
  "░░░░░#░░░▀ ░░▀ ▀▀▀ ▀ ▀ ▀ ▀ ░▀ ░░░░#░░░░░",
  "░░█▀▀ █ █ █▀█ █ █▀▀ ▀█▀ █▄░▄█ █▀█ █▀▀ ░░",
  "░░█ ░░█▀█ ██▀ █ ▀▀█ ░█ ░█ ▀ █ █▀█ ▀▀█ ░░",
  "░░▀▀▀ ▀ ▀ ▀ ▀ ▀ ▀▀▀ ░▀ ░▀ ░░▀ ▀ ▀ ▀▀▀ ░░",
];
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;

type test_1_actual = ToAsciiArt<"  Happy new  \n  * : * : * Year * : * : *  ">;
type test_1_expected = [
        "░░█ █ █▀█ █▀█ █▀█ █ █ ░█▄░█ █▀▀ █ ░░█ ░░",
        "░░█▀█ █▀█ █▀▀ █▀▀ ▀█▀ ░█ ▀█ █▀▀ █▄▀▄█ ░░",
        "░░▀ ▀ ▀ ▀ ▀ ░░▀ ░░░▀ ░░▀ ░▀ ▀▀▀ ▀ ░ ▀ ░░",
        "░░░░#░░░#░░░█ █ █▀▀ █▀█ █▀█ ░░░#░░░#░░░░",
        "░░#░░░#░░░#░▀█▀ █▀▀ █▀█ ██▀ ░#░░░#░░░#░░",
        "░░░░#░░░#░░░░▀ ░▀▀▀ ▀ ▀ ▀ ▀ ░░░#░░░#░░░░",
];
type test_1 = Expect<Equal<test_1_actual, test_1_expected>>;

type test_2_actual = ToAsciiArt<"  * : * : * : * : * : * \n  Trash  \n  * : * : * : * : * : * ">;
type test_2_expected = [
  "░░░░#░░░#░░░#░░░#░░░#░░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░░░#░░░#░░░#░░░#░░░#░░░",
  "░░▀█▀ █▀█ █▀█ █▀▀ █ █ ░░",
  "░░░█ ░██▀ █▀█ ▀▀█ █▀█ ░░",
  "░░░▀ ░▀ ▀ ▀ ▀ ▀▀▀ ▀ ▀ ░░",
  "░░░░#░░░#░░░#░░░#░░░#░░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░░░#░░░#░░░#░░░#░░░#░░░",
];
type test_2 = Expect<Equal<test_2_actual, test_2_expected>>;

type test_3_actual = ToAsciiArt<"  : * : * : * : * : * : * : \n  Ecyrbe  \n  : * : * : * : * : * : * : ">;
type test_3_expected = [
  "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░░░#░░░#░░░#░░░#░░░#░░░#░░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░█▀▀ █▀▀ █ █ █▀█ █▀▄ █▀▀ ░░",
  "░░█▀▀ █ ░░▀█▀ ██▀ █▀▄ █▀▀ ░░",
  "░░▀▀▀ ▀▀▀ ░▀ ░▀ ▀ ▀▀  ▀▀▀ ░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
  "░░░░#░░░#░░░#░░░#░░░#░░░#░░░",
  "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
];
type test_3 = Expect<Equal<test_3_actual, test_3_expected>>;