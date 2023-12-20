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
