
class Test<T>{

    public test(t: T) {
        console.log(t.constructor.name, "->", t)
    }
}

export default Test;