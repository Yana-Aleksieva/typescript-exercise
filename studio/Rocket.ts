import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {

    name: string
    totalCapacityKg: number
    cargoItems: Cargo[] = []
    astronauts: Astronaut[] = []

    constructor(name: string, totalCapacityKg: number) {


        this.name = name,
        this.totalCapacityKg = totalCapacityKg
    }

    sumMass(items: Payload[]): number {
        let sum = 0;
      

        items.forEach(el => {

            sum += el.massKg
        });

        return sum;
    }


    currentMassKg(): number {

        let cargoSum = this.sumMass(this.cargoItems);
        let astronautsSum = this.sumMass(this.astronauts);
        return cargoSum + astronautsSum;
    }

    canAdd(item: Payload): boolean {

        return this.currentMassKg() + item.massKg <= this.totalCapacityKg ? true : false;
    }

    addCargo(cargo: Cargo): boolean {

        if (this.canAdd(cargo) === true) {

            this.cargoItems.push(cargo);
            return true
        } else {
            return false;
        }


    }

    addAstronaut(astronaut: Astronaut): boolean {

        if (this.canAdd(astronaut) == true) {
            this.astronauts.push(astronaut);
            return true
        } else {
            return false;
        }
    }
}
// . Defined in `Rocket.ts`.
// 2. Properties:
// * `name` should be a string.
// * `totalCapacityKg` should be a number.
// * `cargoItems` should be an array of `Cargo` objects.
//   * Should be initialized to an empty array
// * `astronauts` should be an array of `Astronaut` objects.
//   * Should be initialized to an empty array
// 3. Constructor:
//         Parameter `name` should be a string.
//         Parameter `totalCapacityKg` should be a number.
//         Sets value of `this.name` and `this.totalCapacityKg`
// 4. Methods:
// * `sumMass( items: Payload[] ): number`
//   * Returns the sum of all `items` using each item's `massKg` property
// * `currentMassKg(): number`
//   * Uses `this.sumMass` to return the combined mass of `this.astronauts` and `this.cargoItems`
// * `canAdd(item: Payload): boolean`
//   * Returns `true` if `this.currentMassKg() + item.massKg <= this.totalCapacityKg`
// * `addCargo(cargo: Cargo): boolean`
//   * Uses `this.canAdd()` to see if another item can be added.
//   * If `true`, adds cargo to `this.cargoItems` and returns `true`.
//   * If `false`, returns `false`.
// * `addAstronaut(astronaut: Astronaut): boolean`
//   * Uses `this.canAdd()` to see if another astronaut can be added.
//   * If `true`, adds `astronaut` to `this.astronauts` and returns `true`.
//   * If `false`, returns `false`.