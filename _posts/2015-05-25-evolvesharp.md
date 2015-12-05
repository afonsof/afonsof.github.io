---
layout: post
title: EvolveSharp
date: 2015-05-25 17:58:27.000000000 -03:00
type: post
image: /assets/images/posts/evolvesharp.png
categories:
- Projects
---
Genetic algorithm framework  
<!--more-->

**[View github repositoty](https://github.com/afonsof/EvolveSharp)**

## Getting Started

#### 1\. Setting Up

Create a Console Application and install EvoleSharp using Nuget:

    PM> Install-Package EvolveSharp

#### 2\. Create a fitness function

In this simple example we are creating a fitness function to sum all genes of an individual

    public class ExampleFitnessFunction : IFitnessFunction
    {
        public double Evaluate(IIndividual individual)
        {
            var sum = 0.0;
            for (var i = 0; i < individual.Length; i++)
            {
                sum += individual[i];
            }
            return sum;
        }
    }

#### 3\. Instantiate the GeneticAlgorithm class and call the Evolve method

You can set 3 parameters:

1.  Population count: How many individuals each population will have
2.  Gene count: How many genes each individual will have
3.  Generation count: How many generations will occour

    class Program
    {
        static void Main(string[] args)
        {
            const int populationCount = 100;
            const int generationCount = 10000;
            const int geneCount = 10;

            var ga = new GeneticAlgorithm(populationCount, geneCount, new ExampleFitnessFunction());
            ga.Evolve(generationCount);
        }
    }

#### Other information

1.  You can create your own mutation, selection, crossover and initializer class. You just need to inherit the respective interface.
2.  You can set the `Mutator`, `CrossoverMethod`, `Selector` and `Initializer` after instantiate the `GeneticAlgorithm` class.
3.  You can create and set your own reporter in `GeneticAlgorithm` class.

## Sample

Clone EvolveSharp and try the Travelling salesman problem sample

## Contributing

Please use the issue tracker and pull requests.

## License

Copyright (c) 2014 Afonso França  
Licensed under the MIT license.

![logo]({{ site.baseurl }}/assets/logo-300x284.png)