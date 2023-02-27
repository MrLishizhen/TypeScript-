//[123,'123'] --> ['123',123]

function updateArr<T,U>(t:[T,U]):[U,T]{
    return [t[1],t[0]]
}
updateArr([123,'123'])
updateArr([true,123])
