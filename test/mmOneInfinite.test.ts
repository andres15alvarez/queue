import { MM1Infinite } from '../src/models/mmOneInfinite'
import { test, expect } from 'vitest'

test('MM1Infinite', () => {
  const mm1Infinite = new MM1Infinite()
  const result = mm1Infinite.calculate({ lambda: 5, mu: 8 })
  expect(result).toEqual({
    L: 1.6666666666666667,
    Lq: 1.0416666666666667,
    W: 0.3333333333333333,
    Wq: 0.20833333333333331,
    Pn: [{ probability: 0.375, cummulative: 0.375 }]
  })
})

test('MM1Infinite with iterations', () => {
  const mm1Infinite = new MM1Infinite()
  const result = mm1Infinite.calculate({ lambda: 5, mu: 8, iterations: 4 })
  expect(result).toEqual({
    L: 1.6666666666666667,
    Lq: 1.0416666666666667,
    W: 0.3333333333333333,
    Wq: 0.20833333333333331,
    Pn: [
      { probability: 0.375, cummulative: 0.375 },
      { probability: 0.234375, cummulative: 0.609375 },
      { probability: 0.146484375, cummulative: 0.755859375 },
      { probability: 0.091552734375, cummulative: 0.847412109375 },
      { probability: 0.057220458984375, cummulative: 0.904632568359375 }
    ]
  })
})

test('MM1Infinite with rho >= 1', () => {
  const mm1Infinite = new MM1Infinite()
  expect(() => mm1Infinite.calculate({ lambda: 8, mu: 5 })).toThrowError(
    'Rho must be less than 1'
  )
})
