import { MM1Finite } from '../src/models/mmOneFinite'
import { test, expect } from 'vitest'

test('MM1Finite', () => {
  const mm1Finite = new MM1Finite()
  const result = mm1Finite.calculate({ lambda: 6, mu: 10, maxCapacity: 4 })
  expect(result).toEqual({
    L: 0.996460102201944,
    Lq: 0.4301866809666907,
    W: 0.17596801559718153,
    Wq: 0.07596801559718153,
    Pn: [
      { probability: 0.4337265787647467, cummulative: 0.4337265787647467 },
      { probability: 0.260235947258848, cummulative: 0.6939625260235947 },
      { probability: 0.1561415683553088, cummulative: 0.8501040943789034 },
      { probability: 0.09368494101318527, cummulative: 0.9437890353920887 },
      { probability: 0.05621096460791117, cummulative: 0.9999999999999999 }
    ]
  })
})

test('MM1Finite without maxCapacity', () => {
  const mm1Finite = new MM1Finite()
  expect(() => mm1Finite.calculate({ lambda: 6, mu: 10 })).toThrowError(
    'Max Capacity is required for finite model'
  )
})
