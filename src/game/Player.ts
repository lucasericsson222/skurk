import { ActiveEntity } from "./Entity";

export class Player extends ActiveEntity {
    action() {

    }
    display() {
        return ["@"];
    }
}