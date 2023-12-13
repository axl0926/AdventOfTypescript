type SantaListProtector<T> = {readonly [K in keyof T]: keyof T[K] extends null?T[K]: SantaListProtector<T[K]>};
