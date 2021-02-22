const plus = (a:number, b:number) : number => {
    return a+b
}

test('sample', () => {
    expect(plus(2, 3)).toBe(5)
})