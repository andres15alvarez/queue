# Queueing Theory

![Static Badge](https://img.shields.io/badge/Typescript-007acc?logo=typescript&labelColor=black) ![Static Badge](https://img.shields.io/badge/Prettier-yellow?logo=prettier&labelColor=black)

This package provides models for queueing theory, including finite and infinite queue models. Queueing theory is the mathematical study of waiting lines, or queues. This package allows you to calculate various performance metrics for different types of queues.  
This package is developed and maintained by a group of students of the Operations Research III course of the Science and Technology Department (DCyT) of UCLA, Barquisimeto.

## Installation

To install the package, use npm:

```sh
npm install @dcyt/queue
```

## Usage

here is an example of how to use the package:

```ts
import { Queue } from '@dcyt/queue'

const queue = new Queue()

const result = queue.calculate({
  lambda: 5,
  mu: 8,
  servers: 1,
  maxCapacity: 0,
  iterations: 5
})

console.log(result)
```

## Models

The package supports the following queue models

- MM1 Infinite
- MM1 Finite

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
