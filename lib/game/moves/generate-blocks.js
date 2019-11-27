const library = [
    // 1 tall
    [[true]],
    [[true, true]],
    [[true, true, true]],
    [[true, true, true, true]],
    [[true, true, true, true, true]],

    // 1 wide
    [[true], [true]],
    [[true], [true], [true]],
    [[true], [true], [true], [true]],
    [[true], [true], [true], [true], [true]],

    // 2x2
    [
        [true, true],
        [true, true]
    ],
    [
        [true, true],
        [true, false]
    ],
    [
        [true, true],
        [false, true]
    ],
    [
        [true, false],
        [true, true]
    ],
    [
        [false, true],
        [true, true]
    ],
    // 3x3
    [
        [true, true, true],
        [true, true, true],
        [true, true, true]
    ],
    [
        [true, true, true],
        [true, false, false],
        [true, false, false]
    ],
    [
        [false, false, true],
        [false, false, true],
        [true, true, true]
    ]
]

export default function(G, ctx, count = 3) {}
