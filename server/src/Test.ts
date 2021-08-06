import { type } from "os";

class Test<T>{

    public test(t: T) {
        console.log(t.constructor.name, "->", t);

        let test: TestModel = { name: 'test', age: 32 } as TestModel;

        for (let key in test) {
            console.log("---------------", key);
        }

    }
}

type TestModel = {
    name: string,
    age: number
}

export default Test;