type B<T extends any[],U>= U extends T['length'] ? T: B<[T[0], ...T],U>
type BoxToys<T extends string,U> =B<[T],U>